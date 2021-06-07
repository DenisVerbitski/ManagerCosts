const Router = require("express");
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")
const router = new Router()
const authMiddleware = require("../middleware/auth.middleware")


router.post('/registration',
    [
        check('UserName', "Некорректное имя пользователя").isLength({min:3, max:12}),
        check('password', 'Пароль должен быть длинее 3 и меньше 12').isLength({min:3, max:12})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Некорректный запрос", errors})
        }
        const {UserName, password} = req.body
        const candidate = await User.findOne({UserName})
        if(candidate) {
            return res.status(400).json({message: `Пользователь: ${UserName} уже зарегистрирован`})
        }
        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({UserName, password: hashPassword})
        await user.save()
        res.json({message: "Пользователь создан"})
    } catch (e) {
        console.log(e)
        res.send({message: "Ошибка сервера"})
    }
})

router.post('/login',
    async (req, res) => {
        try {
            const {UserName, password} = req.body
            const user = await User.findOne({UserName})
            if (!user) {
                return res.status(404).json({message: "Пользователь не найден"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Неверный пароль"})
            }
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    _id: user._id,
                    UserName: user.UserName,
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Ошибка сервера"})
        }
    })

    router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
         const user =  await User.findOne({_id: req.user.id})
         const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
         return res.json({
             token,
             user: {
                 id: user.id,
                 UserName: user.UserName,
             }
         })
        } catch (e) {
            console.log(e)
            res.send({message: "Ошибка сервера"})
        }
    })

module.exports = router