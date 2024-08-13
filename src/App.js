import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import DashboardsMenu from "./pages/DashboardsMenu";
import EmployeesMenu from "./pages/EmployeesMenu";
import { AuthContextProvider } from "./AuthContext";
import "@fontsource/poppins";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div>
          <Sidebar />
          <Routes>
            <Route path="/" element={<DashboardsMenu />} />
            <Route path="employees" element={<EmployeesMenu />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
