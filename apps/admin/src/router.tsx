import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import EditorPage from "@/pages/editor";
import { ServicePage, AddServicePage, ServiceDetailPage } from "./pages/service";
import { GuideEditPage } from "@/pages/guide";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/editor/:serviceId" element={<EditorPage />} />
        <Route path="/editor/:serviceId/:guideId" element={<GuideEditPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/new" element={<AddServicePage />} />
        <Route path="/service/:id" element={<ServiceDetailPage />} />
        <Route path="/service/:id/edit" element={<AddServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}
