import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Signin } from "./components/auth/signin";
import { Signup } from "./components/auth/signup";
import NotFound from "./pages/others/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to Signin */}
        <Route path="/" element={<Navigate to="/signin" replace />} />

        {/* Auth routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Catch-all: 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
