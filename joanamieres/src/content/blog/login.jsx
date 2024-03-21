import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import App from "../config/config";


const LoginOn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();

    App();
    const handleEmail = (event) => {
        setEmail(event.target.value); // Corrigido para acessar event.target.value
    }

    const handlePassword = (event) => {
        setPassword(event.target.value); // Corrigido para acessar event.target.value
    }

    const logar = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Autenticação bem-sucedida, faça algo aqui se necessário
                const user = userCredential.user;
                console.log("logado")
            })
            .catch((error) => {
                // Erro na autenticação
                const errorCode = error.code;
                const errorMessage = error.message;
                // Trate o erro aqui, se necessário
            });
    }

    return (
        <>
            <input type="text" placeholder="Seu Email" value={email} onChange={handleEmail} className="inputEmail" />
            <input type="password" placeholder="Sua Senha" value={password} onChange={handlePassword} className="inputPassword" />
            <input type="button" value="Entrar" onClick={logar} />
        </>
    );
}

export default LoginOn;
