import React, { useState } from "react";
// import styles from 'App.less'; //className = {styles.selector} - импорт стилей
import "antd/dist/antd.css";
import { Navbar } from "./components/PageHeader/Navbar";
import { ITableGroupElement, TableComponent } from "./components/TableComponent/Table";
import { IFormData, IFormElementData } from './components/Modal/ModalComponent/ModalComponent'

function App() {
  const handleDeleteItem = (index: number) => {
    data[index].children = data[index].children.splice(index, 1)
    setData(data)
  }
  const handleAddItem = (index: number, element: IFormElementData) => {
    const formItem: IFormElementData = {
      date: element.date,
      name: element.name,
      spent: element.spent
    }
    data[index].children.push(formItem)
    setData(data)
  }
   const dataSource: Array<IFormData>= [
    {
      category: 'Магазин',
      children: [
        {
          name: 'Евроопт',
          date: '27/04/2021',
          spent: '50'
        }
      ]
    },
   ];
  const [data, setData] = useState<Array<IFormData>>(dataSource)
  const handleCreateCategory = (values:IFormData) =>{
    if (!values.children)
    values.children= [];
    setData([...data, values])
  }
  const handleDeleteCategory = (index:number) =>{
    setData(data.splice(index, 1))
  }
  return (
    <div>
      <Navbar onCreateElement={handleCreateCategory} />
      <TableComponent data = {data} onAddItem={handleAddItem}  />
    </div>
  );
}

export default App;
