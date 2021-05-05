import { useState } from "react";
import "antd/dist/antd.css";
import { Navbar } from "./components/PageHeader/Navbar";
import { SpentsTable } from "./components/SpentsTable/SpentsTable";
import FormCategory from "./components/Modal/CategoryModal/interfaces/FormCategory";
import FormCategoryItem from "./components/Modal/ItemModal/interfaces/FormCategoryItem";

function App() {
  const [formData, setFormData] = useState<FormCategory[]>([]);

  const handleSpentsAddCategory = (categoryToAdd: FormCategory) => {
    if (!categoryToAdd.items) categoryToAdd.items = [];
    setFormData([...formData, categoryToAdd]);
  };
  const handleSpentsDeleteCategory = (indexOfCategory: number) => {
    setFormData([
      ...formData.slice(0, indexOfCategory),
      ...formData.slice(indexOfCategory + 1),
    ]);
  };

  const handleSpentsAddCategoryItem = (
    indexOfCategory: number,
    itemToAdd: FormCategoryItem
  ) => {
    formData[indexOfCategory].items.push(itemToAdd);
    setFormData([...formData]);
  };
  const handleSpentsDeleteCategoryItem = (
    indexOfCategory: number,
    indexOfItemInCategory: number
  ) => {
    formData[indexOfCategory].items.splice(indexOfItemInCategory, 1);
    setFormData([...formData]);
  };

  return (
    <div>
      <Navbar onAddCategory={handleSpentsAddCategory} />
      <SpentsTable
        formData={formData}
        onAddItemToCategory={handleSpentsAddCategoryItem}
        onDeleteItemFromCategory={handleSpentsDeleteCategoryItem}
        onDeleteCategory={handleSpentsDeleteCategory}
      />
    </div>
  );
}

export default App;
