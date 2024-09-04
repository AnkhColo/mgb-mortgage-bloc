import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import DashboardsMenu from "./pages/DashboardsMenu";
import EmployeesMenu from "./pages/EmployeesMenu";
import { AuthContextProvider } from "./AuthContext";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div>
          <LandingPage />

          <Routes>
            <Route path="landing" element={<LandingPage />} />
            <Route path="login" element={<SignUp />} />
            <Route
              path="/"
              element={
                <>
                  <Sidebar />
                  <DashboardsMenu />
                </>
              }
            />
            <Route
              path="employees"
              element={
                <>
                  <Sidebar />
                  <EmployeesMenu />
                </>
              }
            />
          </Routes>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
