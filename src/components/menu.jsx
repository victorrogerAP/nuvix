"use client"
import Image from "next/image"
import nuvix from "@/assets/logo.png"
import { CircleUserRound } from 'lucide-react';

export default function Menu(){
    return(
        <div className="flex justify-around items-center pt-20">
            <div className="">
                <Image
                src={nuvix}
                height={200}
                width={200}/>
            </div>
            <div className="flex items-center">
                <CircleUserRound className="size-10 text-white"
                />
                <p className="text-white font-bold ml-3">Criar conta</p>
            </div>
        </div>
    )
}