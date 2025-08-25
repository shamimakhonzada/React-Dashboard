import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

export const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // token saved on login
        if (!token) {
          setError("Missing token. Please log in again.");
          return;
        }

        const res = await axios.get("http://localhost:4000/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch user");
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <div className="flex w-screen flex-col justify-between">
        <Navbar />
      </div>
      <div>
        {error && <p className="text-red-500">{error}</p>}
        {user ? (
          <pre className="mt-4 rounded bg-gray-100 p-3 text-sm dark:bg-gray-900 dark:text-white">
            {JSON.stringify(user, null, 2)}
          </pre>
        ) : (
          !error && <p className="mt-2 text-gray-500">Loading user...</p>
        )}
      </div>
    </>
  );
};
