import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Header from "./_components/common/Header";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-100">
      <Header />
      <main className="flex-grow px-4 py-8 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
      <footer className="mt-auto bg-gradient-to-br from-purple-600 to-indigo-700 py-6 text-center text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-sm md:text-base">
            &copy; 2024{" "}
            <a
              href="https://tarin-agarwal.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-indigo-200"
            >
              Tarin Agarwal
            </a>{" "}
            | ResumeX
          </p>
        </div>
      </footer>
    </div>
  );
}
