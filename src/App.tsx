import React, { useState } from "react";
// import styles from 'App.less'; //className = {styles.selector} - импорт стилей
import "antd/dist/antd.css";
import { Navbar } from "./components/PageHeader/Navbar";
import { TableComponent } from "./components/TableComponent/Table";
import { IFormData } from './components/Modal/ModalComponent/ModalComponent'

function App() {
  const dataSource: Array<IFormData>= [
    {
      category: 'test1',
      children: [
        {
          name: '123',
          date: '123123',
          spent: '1222'
        }
      ]
    },
    {
      category: 'test2',
      children: []
    },
    {
      category: 'test3',
      children: []
    }
  ];
  const [data, setData] = useState<Array<IFormData>>(dataSource)
  const handleCreateElement = (values:IFormData) =>{
    if (!values.children)
    values.children= [];
    setData([...data, values])
  }
  return (
    <div>
      <Navbar onCreateElement={handleCreateElement} />
      <TableComponent data = {data} />
    </div>
  );
}

export default App;
