import { useState } from "react";
import "antd/dist/antd.css";
import { Navbar } from "./components/PageHeader/Navbar";
import { TableComponent } from "./components/TableComponent/Table";
import FormCategory from "./components/Modal/CategoryModal/interfaces/FormCategory";
import FormCategoryItem from "./components/Modal/ItemModal/interfaces/FormCategoryItem";

function App() {
  const [data, setData] = useState<FormCategory[]>([]);

  const handleCreateCategory = (values: FormCategory) => {
    if (!values.children) values.children = [];
    setData([...data, values]);
  };
  const handleDeleteCategory = (index: number) => {
    setData([...data.slice(0, index), ...data.slice(index + 1)]);
  };

  const handleAddCategoryItem = (indexCategory: number, item: FormCategoryItem) => {
    data[indexCategory].children.push(item);
    setData([...data]);
  };
  const handleDeleteCategoryItem = (indexCategory: number, indexCategoryItem: number) => {
    data[indexCategory].children.splice(indexCategoryItem, 1);
    setData([...data]);
  };

  return (
    <div>
      <Navbar onCreateCategory={handleCreateCategory} />
      <TableComponent
        formData={data}
        onAddCategoryItem={handleAddCategoryItem}
        onDeleteCategoryItem={handleDeleteCategoryItem}
        onDeleteCategory={handleDeleteCategory}
      />
    </div>
  );
}

export default App;
