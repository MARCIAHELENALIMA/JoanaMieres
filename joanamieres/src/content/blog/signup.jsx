import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import App from "../config/config";
import { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Inicialize o Firebase
    App();

    // Obtenha a instância de autenticação
    const auth = getAuth();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // Envie o e-mail de verificação
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // E-mail de verificação enviado
                    })
                    .catch((error) => {
                        // Erro ao enviar o e-mail de verificação
                        setError(error.message);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    return (
        <section className="LoginForm">
            <form onSubmit={handleSubmit}>
                <h1>Crie uma Conta</h1>
                <input type="text" placeholder="Seu Email" id="email" value={email} onChange={handleEmailChange} className="InputEmail" />
                <input type="password" placeholder="Sua Senha" id="password" value={password} onChange={handlePasswordChange} className="InputPassword" />
                {error && <p>{error}</p>}
                <input type="submit" value="Entrar" />
            </form>
        </section>
    )
}

export default SignUp;
