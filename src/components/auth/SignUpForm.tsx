import { DarkThemeToggle, Label, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Eye, EyeClosed } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Success
      setToastVisible(true);

      // Redirect after 2s
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => setToastVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  return (
    <div
      className="grid min-h-screen grid-cols-1 bg-gray-50 md:grid-cols-2 dark:bg-gray-950"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section */}
      <div className="hidden items-center justify-center md:flex"></div>

      {/* Right Section */}
      <div className="relative flex flex-col items-center justify-center p-6">
        <DarkThemeToggle className="absolute top-4 right-4 rounded-full" />

        <Card className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Create Account
            </CardTitle>
            <CardDescription className="text-center">
              Join us and start your journey
            </CardDescription>
            <CardAction className="mt-2 flex justify-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Sign in
                </Link>
              </p>
            </CardAction>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First & Last Name */}
              <div>
                <Label htmlFor="name">Full Name</Label>
                <TextInput
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  shadow
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email</Label>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  shadow
                />
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <TextInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                    className="pr-10"
                    shadow
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeClosed size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <TextInput
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                    className="pr-10"
                    shadow
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    {showConfirmPassword ? (
                      <EyeClosed size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-sm font-medium text-red-500">{error}</p>
              )}

              {/* Buttons */}
              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full rounded-lg font-medium"
                  disabled={loading}
                >
                  {loading ? "Creating account..." : "Sign Up"}
                </Button>
                <Button
                  variant="outline"
                  className="flex w-full items-center justify-center gap-2 rounded-lg font-medium"
                >
                  <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    alt="Google"
                    className="h-5 w-5"
                  />
                  Continue with Google
                </Button>
              </div>
            </form>
          </CardContent>

          <CardFooter className="text-center text-xs text-gray-500 dark:text-gray-400">
            By signing in, you agree to our{" "}
            <Link to="/terms" className="underline hover:text-blue-600">
              Terms
            </Link>{" "}
            &{" "}
            <Link to="/privacy" className="underline hover:text-blue-600">
              Privacy Policy
            </Link>
          </CardFooter>
        </Card>

        {/* Success Toast */}
        {toastVisible && (
          <div className="absolute bottom-6 animate-bounce rounded-lg bg-green-500 px-4 py-2 text-white shadow-md">
            Account created successfully! Redirecting...
          </div>
        )}
      </div>
    </div>
  );
};
