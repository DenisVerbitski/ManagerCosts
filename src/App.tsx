import { useState } from "react";
import "antd/dist/antd.css";
import { Navbar } from "./components/PageHeader/Navbar";
import { TableComponent } from "./components/TableComponent/Table";
import {
  IFormData,
  IFormElementData,
} from "./components/Modal/ModalComponent/ModalComponent";

function App() {
  const [data, setData] = useState<Array<IFormData>>([]);

  const handleCreateCategory = (values: IFormData) => {
    if (!values.children) values.children = [];
    setData([...data, values]);
  };
  const handleDeleteCategory = (index: number) => {
    setData(data.splice(index, 1));
  };

  const handleAddItem = (index: number, element: IFormElementData) => {
    const formItem: IFormElementData = {
      date: element.date,
      name: element.name,
      spent: element.spent,
    };
    data[index].children.push(formItem);
    setData(data);
  };
  const handleDeleteItem = (index: number) => {
    data[index].children = data[index].children.splice(index, 1);
    setData(data);
  };

  return (
    <div>
      <Navbar onCreateElement={handleCreateCategory} />
      <TableComponent
        data={data}
        onAddItem={handleAddItem}
        onDeleteItem={handleDeleteItem}
        onDeleteCategory={handleDeleteCategory}
      />
    </div>
  );
}

export default App;
