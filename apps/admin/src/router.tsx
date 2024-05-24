import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import Editor from "@/pages/editor";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/editor/:guideId" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}
