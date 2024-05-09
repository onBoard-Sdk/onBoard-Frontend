import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/login";
import Signup from "@/pages/signup";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
