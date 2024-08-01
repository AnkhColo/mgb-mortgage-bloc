import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import DashboardsMenu from "./pages/DashboardsMenu";
import EmployeesMenu from "./pages/EmployeesMenu";
import { AuthContextProvider } from "./AuthContext";
// import Overview from "./employeesComponents/Overview";
// import Charts from "./employeesComponents/Charts";
// import CreditData from "./employeesComponents/CreditData";
// import Transactions from "./employeesComponents/Transactions";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div
          className="bg:[rgba(11, 12, 18, 1)];
"
        >
          <Sidebar />
          <Routes>
            <Route path="/" element={<DashboardsMenu />} />
            <Route path="employees/*" element={<EmployeesMenu />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
