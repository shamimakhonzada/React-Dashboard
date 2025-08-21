import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="relative z-1 flex min-h-screen flex-col justify-center bg-gray-50 p-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          Terms & Conditions
        </h1>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Welcome to our application. By accessing or using our services, you
          agree to comply with the following Terms and Conditions. Please read
          them carefully.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          1. Use of Service
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          You agree to use the service only for lawful purposes and in a manner
          that does not infringe the rights of, restrict, or inhibit anyone
          else’s use.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          2. Intellectual Property
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          All content, trademarks, and data on this website, including software,
          databases, text, graphics, icons, and hyperlinks, are the property of
          the company or licensed to us.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          3. Limitation of Liability
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We are not responsible for any damages, losses, or claims arising from
          the use of our services or inability to access them.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          4. Changes to Terms
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          We may update these Terms and Conditions from time to time. Your
          continued use of our services means you accept those changes.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} - All rights reserved.
      </p>
    </div>
  );
}
