import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <div className="relative z-1 flex min-h-screen flex-col justify-center bg-gray-50 p-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-8 shadow-md dark:bg-gray-800">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          Privacy Policy
        </h1>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Your privacy is very important to us. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you use
          our application.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We may collect personal information such as your name, email address,
          and usage data when you interact with our services.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          2. How We Use Your Information
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          The information we collect is used to improve our services, provide
          customer support, and personalize your experience.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          3. Sharing of Information
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We do not sell or rent your personal information to third parties. We
          may share it only with trusted service providers or if required by
          law.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          4. Security of Data
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          We implement reasonable measures to protect your personal data, but no
          system is 100% secure. Use our services at your own risk.
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
};
