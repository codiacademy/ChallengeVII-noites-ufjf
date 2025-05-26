import { Checkbox } from "@/components/common/CheckBoxLoginRegister";
import { Input } from "@/components/common/InputLoginRegister";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate();

    function Login(formData: FormData){
        const doc = formData.get("txtDoc")
        const pass = formData.get("txtPass")
    
        if (doc == '1234' && pass == "123") {
            navigate("/")
        }else{
            alert("Documento ou senha incorretos")
            console.log("Documento ou senha incorretos")
            // exibir erro
        }
    }

    return (
        <div className="flex-1 relative z-10">
            <main className="w-screen h-screen flex flex-row items-center justify-center overflow-hidden p-4">
                <div className=" flex items-center justify-center">
                    <img className="w-154" src="src\assets\imgLogin.png" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="src\assets\codicash.png" className="w-46 mb-2" />
                    <label className="font-[sans-serif] text-[40px] text-emerald-600 mb-2">CODICASH</label>

                  
                        <form action={Login} className="w-100 bg-black rounded-md flex flex-col justify-items-start gap-4 p-6">
                            <label className="text-emerald-600 text-[26px]">Login</label>
                            <label className="text-[14px] mb-0">Faça login para iniciar sua jornada</label>

                            <Input inputId="txtDoc" inputTitle="Documento" inputType="text"/>
                            <Input inputId="txtPass" inputTitle="Senha" inputType="password"/>

                            <div className="flex flex-row justify-between">
                                <Checkbox titleChecked="Memorizar minha senha" />
                                <label className="text-[10px]">Esqueci minha senha</label>
                            </div>

                            <button
                                type="submit"
                                className="cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white text-[20px] py-2 rounded transition duration-200 w-full">
                                Entrar
                            </button>

                            <div className="flex flex-row justify-center gap-1">
                                <label className="text-[12px]">Ainda não possui conta?</label>
                                <label className="text-[12px]">Clique aqui</label>
                            </div>
                        </form>
                    
                </div>
            </main>
        </div>
    );
}
