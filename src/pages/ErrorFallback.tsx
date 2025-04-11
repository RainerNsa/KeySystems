import { Link } from "react-router-dom";
import errorIllustration from "@/assets/error404.webp";

const ErrorFallback = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#05071E] to-[#000080] px-6 text-white text-center">
      <img
        src={errorIllustration}
        alt="Error illustration"
        className="w-full max-w-md mb-10"
      />

      <h1 className="text-4xl md:text-6xl font-bold mb-4">Something went wrong</h1>
      <p className="text-lg md:text-xl text-[#BBBBBB] mb-6 max-w-xl">
        We encountered an unexpected error. Please try again later or go back to the homepage.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white font-semibold shadow hover:brightness-110 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorFallback;
