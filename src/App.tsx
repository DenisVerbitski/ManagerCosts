import { useState } from "react";
import "antd/dist/antd.css";
import { Navbar } from "./components/PageHeader/Navbar";
import { TableComponent } from "./components/TableComponent/Table";
import FormCategory from "./components/Modal/CategoryModal/interfaces/FormCategory";
import FormItem from "./components/Modal/ItemModal/interfaces/FormItem";

function App() {
  const [data, setData] = useState<Array<FormCategory>>([]);

  const handleCreateCategory = (values: FormCategory) => {
    if (!values.children) values.children = [];
    setData([...data, values]);
  };
  const handleDeleteCategory = (index: number) => {
    setData([...data.slice(0, index), ...data.slice(index + 1)]);
  };

  const handleAddItem = (indexCat: number, item: FormItem) => {
    const { name, date, spent } = item;
    data[indexCat].children.push({
      name: name,
      date: date,
      spent: spent,
    });
    setData([...data]);
  };
  const handleDeleteItem = (indexCat: number, indexItem: number) => {
    data[indexCat].children.splice(indexItem, 1);
    setData([...data]);
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
