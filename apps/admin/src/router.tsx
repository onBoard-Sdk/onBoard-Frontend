import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import { ServicePage, NewServicePage, ServiceDetailPage, EditServicePage } from "./pages/service";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/new" element={<NewServicePage />} />
        <Route path="/service/:id" element={<ServiceDetailPage />} />
        <Route path="/service/:id/edit" element={<EditServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}
