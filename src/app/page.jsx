'use client'
import { useEffect } from "react";
import Dashboard from "./Page/Dashboard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('formData');
    if (!isLoggedIn) router.push('/Page/Login');
  }, [router]);

  return (
    <main>
      <Dashboard/>
    </main>
  );
}
