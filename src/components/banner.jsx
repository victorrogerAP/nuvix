import Image from "next/image";
import banner from "@/assets/controle.jpg"

export default function Banner(){
    return(
        <div className="flex justify-center items-center ">
            <Image
            src={banner}
            width={642}
            height={600}
            />
            <div className="absolute ml-80 bg-white p-2">
                <button className="relative">Assine já</button>
            </div>
        </div>
    );
};