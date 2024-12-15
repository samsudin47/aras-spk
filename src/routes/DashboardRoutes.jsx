import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import HalamanKriteria from "../pages/HalamanKriteria";

function DashboardRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/halaman-kriteria" element={<HalamanKriteria />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default DashboardRoutes;
