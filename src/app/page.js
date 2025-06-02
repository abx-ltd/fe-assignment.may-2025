"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to projects page as default
    router.push("/projects");
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-600 mb-2">Loading...</h2>
        <p className="text-gray-500">Redirecting to projects page</p>
      </div>
    </div>
  );
}
