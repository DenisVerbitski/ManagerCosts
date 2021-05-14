import { Navbar } from "./components/PageHeader/Navbar";
import { SpentsTable } from "./components/SpentsTable/SpentsTable";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <Navbar />
      <SpentsTable />
    </div>
  );
}

export default App;
