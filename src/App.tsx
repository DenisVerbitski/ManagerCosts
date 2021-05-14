import { Navbar } from "./components/PageHeader/Navbar";
import { SpentsTable } from "./components/SpentsTable/SpentsTable";
import "antd/dist/antd.css";

function App() {
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
