

export default function Main(){
    return(
        <div className="flex justify-center items-center pt-10">
            <ul className="flex bg-white rounded-tl-xl rounded-tr-xl">
                <li><button className="bg-white p-2 rounded-tl-xl">Destaque</button></li>
                <li><button className="bg-white p-2">Novidades </button></li>
                <li><button className="bg-white p-2">Jogos</button></li>
                <li><button className="bg-white p-2">Assinatura</button></li>
                <li><button className="bg-white p-2">Cloudgame</button></li>
                <li><button className="bg-white p-2">Fale Conosco</button></li>
                <li><button className="bg-blue-400 p-2 rounded-tr-xl rounded-bl-xl">Baixe Agora</button></li>
            </ul>
        </div>
    );
};