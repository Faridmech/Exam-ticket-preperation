import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "Home";
import { Tickets } from "Components/Tickets";
import { Pdf } from "Components/PdfGenerator";
export const AppRouter = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/pdf" element={<Pdf />} />
      </Route>
    </Routes>
  );
};
