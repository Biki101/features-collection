"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col gap-10 justify-center items-center">
      <h1 className="mt-10 text-3xl">Direct Links</h1>
      <ul className="w-[700px] list-disc text-xl">
        <li
          onClick={() => router.push("/expanding-cards")}
          className="cursor-pointer  hover:underline hover:text-green-500"
        >
          Expanding Cards
        </li>
      </ul>
    </main>
  );
}
