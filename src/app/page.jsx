"use client"
import { useRouter } from "next/navigation";
import Menu from "@/components/menu";
import Main from "@/components/main";
import Banner from "@/components/banner";


export default function Home() {
  const router = useRouter();
  return (
   <div className="bg-gradient-to-b from-slate-800 to-slate-200 w-screen h-screen">
    <Menu/>
    <Main/>
    <Banner/>
   </div>
  );
}
