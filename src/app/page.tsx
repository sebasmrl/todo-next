import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl">Hola</span>
      <Link className="p-2 bg-cyan-500" href="/dashboard">Dashboard</Link>
    </div>
  );
}
