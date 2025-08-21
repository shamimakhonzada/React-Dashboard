import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Signin } from "./components/auth/SignInForm";
import { Signup } from "./components/auth/SignUpForm";
import NotFound from "./pages/others/NotFound";
import Terms from "./pages/others/Terms";
import { PrivacyPolicy } from "./pages/others/PrivacyPolicy";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to Signin */}
        <Route path="/" element={<Navigate to="/signin" replace />} />

        {/* Auth routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Other Pages */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Catch-all: 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
