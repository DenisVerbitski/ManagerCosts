import { useState } from "react";
import "antd/dist/antd.css";
import styles from "./App.less";
import { Navbar } from "./components/PageHeader/Navbar";
import { SpentsTable } from "./components/SpentsTable/SpentsTable";
import FormCategory from "./components/Modal/CategoryModal/interfaces/FormCategory";
import FormCategoryItem from "./components/Modal/ItemModal/interfaces/FormCategoryItem";
import Layout from "antd/lib/layout/layout";
import { PageFooter } from "./components/PageFooter/PageFooter";

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
    <Layout className={styles.positionElement}>
      <Layout className={styles.positionHeader}>
        <Navbar onAddCategory={handleSpentsAddCategory} />
      </Layout>
      <Layout className={styles.positionContent}>
        <SpentsTable
          formData={formData}
          onAddItemToCategory={handleSpentsAddCategoryItem}
          onDeleteItemFromCategory={handleSpentsDeleteCategoryItem}
          onDeleteCategory={handleSpentsDeleteCategory}
        />
      </Layout>
      <Layout className={styles.positionFooter}>
        <PageFooter />
      </Layout>
    </Layout>
  );
}

export default App;
