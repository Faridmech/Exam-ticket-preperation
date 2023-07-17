import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "Home";
import { Tickets } from "Components/Tickets";
export const AppRouter = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
      </Route>
    </Routes>
  );
};
