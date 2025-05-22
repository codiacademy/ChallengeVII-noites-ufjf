import { Checkbox } from "@/components/common/CheckBox";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate();

    return (

        <div className="flex-1 relative z-10">
            <main className="w-screen h-screen flex flex-row items-center justify-center overflow-hidden p-4">
                <div className=" flex items-center justify-center">
                    <img className="w-154" src="src\assets\imgLogin.png" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="src\assets\codicash.png" className="w-46 mb-2" />
                    <label className="font-[sans-serif] text-[40px] text-emerald-600 mb-2">CODICASH</label>

                    <div className="w-100 bg-black rounded-md flex flex-col justify-items-start gap-4 p-6">
                        
                        <label className="text-emerald-600 text-[26px]">Login</label>
                        <label className="text-[14px] mb-0">Faça login para iniciar sua jornada</label>

                        <input className="w-full p-2 mb-3 border-white border-1 rounded" type="text" placeholder="Documento" />
                        <input className="w-full p-2 mb-3 border-white border-1 rounded" type="text" placeholder="Senha" />
                        
                        <div className="flex flex-row justify-between">
                            <Checkbox titleChecked="Memorizar minha senha" />
                            <label className="text-[10px]">Esqueci minha senha</label>
                        </div>

                        <button
                            onClick={() => navigate("/overview")}
                            className="cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white text-[20px] py-2 rounded transition duration-200 w-full">
                            Entrar
                        </button>

                        <div className="flex flex-row justify-center gap-1">
                            <label className="text-[12px]">Ainda não possui conta?</label>
                            <label className="text-[12px]">Clique aqui</label>
                        </div>
    
                    </div>
                </div>
            </main>
        </div>



    );
}
