import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Image
        src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1980&q=60"
        alt="background"
        width={5000}
        height={5000}
        className="w-[100vw] h-[100vh]"
      />
    </main>
  );
}
