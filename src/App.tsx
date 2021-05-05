import { useState } from "react";
import "antd/dist/antd.css";
import { Navbar } from "./components/PageHeader/Navbar";
import { SpentsTable } from "./components/SpentsTable/SpentsTable";
import FormCategory from "./components/Modal/CategoryModal/interfaces/FormCategory";
import FormCategoryItem from "./components/Modal/ItemModal/interfaces/FormCategoryItem";

function App() {
  const [formData, setFormData] = useState<FormCategory[]>([]);

  const handleSpentsAddCategory = (categoryToAdd: FormCategory) => {
    if (!categoryToAdd.items) {
      categoryToAdd.items = [];
    }
    setFormData((prevState) => prevState.concat(categoryToAdd));
  };

  const handleSpentsDeleteCategory = (indexOfCategory: number) => {
    setFormData((prevState) => [
      ...prevState.slice(0, indexOfCategory),
      ...prevState.slice(indexOfCategory + 1),
    ]);
  };

  const handleSpentsAddCategoryItem = (
    indexOfCategory: number,
    itemToAdd: FormCategoryItem
  ) => {
    setFormData((prevState) => [
      ...prevState.slice(0, indexOfCategory),
      ...prevState.slice(indexOfCategory + 1),
      {
        ...prevState[indexOfCategory],
        items: prevState[indexOfCategory].items.concat(itemToAdd),
      },
    ]);
  };
  const handleSpentsDeleteCategoryItem = (
    indexOfCategory: number,
    indexOfItemInCategory: number
  ) => {
    setFormData((prevState) => [
      ...prevState.slice(0, indexOfCategory),
      ...prevState.slice(indexOfCategory + 1),
      {
        ...prevState[indexOfCategory],
        items: [
          ...prevState[indexOfCategory].items.slice(0, indexOfItemInCategory),
          ...prevState[indexOfCategory].items.slice(indexOfItemInCategory + 1),
        ],
      },
    ]);
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
