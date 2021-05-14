import "antd/dist/antd.css";
import { Navbar } from "./components/PageHeader/Navbar";
import { SpentsTable } from "./components/SpentsTable/SpentsTable";

function App() {
  return (
    <div>
      <Navbar />
      <SpentsTable />
    </div>
  );
}

export default App;
