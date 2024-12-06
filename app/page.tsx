"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <main className="bg-gradient-to-b from-indigo-50 to-white h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold tracking-wide">
            AmazonCx Technical Test
          </h1>
          <p className="mt-4 text-xl font-light">
            Showcase your skills with <strong>Next.js 14</strong>, <strong>DaisyUI</strong>, and database fetching.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-8 py-8 bg-white rounded-lg shadow-lg my-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">
          Your Challenge
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Implement a <strong>Search Bar and pagination</strong> in the dashboard that fetches data from a pre-configured Supabase database. The search should allow users to filter results efficiently and offer features that make the application more user-friendly and flexible.
        </p>

        {/* Project Configuration */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
            Project Configuration
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              The Supabase table <strong>already exists</strong>, so you don't need to create it.
            </li>
            <li>
              The database contains a table named <strong>products</strong>, with columns:
              <ul className="list-inside list-square ml-6 mt-2">
                <li><strong>id</strong> (integer, primary key)</li>
                <li><strong>name</strong> (string)</li>
                <li><strong>description</strong> (string)</li>
                <li><strong>price</strong> (float)</li>
              </ul>
            </li>
            <li>
              The project is pre-configured with <strong>Tailwind CSS</strong>, <strong>DaisyUI</strong>, and a <strong>Supabase client</strong>.
            </li>
          </ul>
        </div>

        {/* Expectations */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
            Expectations for the Search Bar and Pagination
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              The application should allow users to filter the results efficiently and dynamically update based on the search criteria.
            </li>
            <li>
              URLs should be shareable and bookmarkable. This ensures users can revisit the same search results or share their filters with others.
            </li>
            <li>
              The search functionality should integrate seamlessly between client and server, ensuring the initial state is rendered appropriately.
            </li>
            <li>
              Pagination must display <strong>5 results per page</strong> and allow users to navigate between pages using "Previous" and "Next" buttons.
            </li>
            <li>
              Pagination state must also be synchronized with the URL (e.g., <code>?page=2</code>).
            </li>
          </ul>
        </div>

        {/* Submission Instructions */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
            How to Submit Your Solution
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Create a <strong>Pull Request</strong> in the GitHub repository where this project is hosted.
            </li>
            <li>
              Record a short video using <strong>Loom</strong> or a similar tool, explaining your implementation. Highlight:
              <ul className="list-inside list-square ml-6 mt-2">
                <li>The architecture of your solution.</li>
                <li>How the search bar works, including URL synchronization.</li>
                <li>How pagination interacts with the search functionality.</li>
                <li>Any decisions you made regarding optimization or usability.</li>
              </ul>
            </li>
            <li>
              Include the Loom link in your Pull Request description.
            </li>
          </ul>
          <p className="text-gray-600 text-sm mt-4">
            Please ensure your code is clean and well-documented. We’re evaluating not only the functionality but also the quality of your implementation.
          </p>
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            onClick={navigateToDashboard}
            className="btn btn-primary px-10 py-3 text-lg font-semibold rounded-lg shadow-md"
          >
            Go to Dashboard
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-600 py-6 mt-auto text-center">
        <p>
          Questions? Check the{" "}
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            className="text-indigo-600 underline"
          >
            Next.js Documentation
          </a>{" "}
          or{" "}
          <a
            href="https://supabase.com/docs"
            target="_blank"
            className="text-indigo-600 underline"
          >
            Supabase Documentation
          </a>.
        </p>
      </footer>
    </main>
  );
}