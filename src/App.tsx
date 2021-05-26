import { Layout } from "antd";

import { Navbar } from "./components/PageHeader/Navbar";
import { SpentsTable } from "./components/SpentsTable/SpentsTable";
import { PageFooter } from "./components/PageFooter/PageFooter";

import styles from "./App.less"

function App() {
  return (
    <div className={styles.PagesBackground}>
    <Layout className={styles.positionElement}>
      <Layout className={styles.positionHeader}>
        <Navbar  />
      </Layout>
      <Layout className={styles.positionContent}>
        <SpentsTable />
      </Layout>
      <Layout className={styles.positionFooter}>
        <PageFooter />
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
