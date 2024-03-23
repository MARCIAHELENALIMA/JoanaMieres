import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import App from "../config/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginOn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [redirectToEmbeddedSite, setRedirectToEmbeddedSite] = useState(false);
    App();
    // Obtenha a instância de autenticação
    const auth = getAuth();
    const navigate = useNavigate();
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('entrei')
                setRedirectToEmbeddedSite(true)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    if (redirectToEmbeddedSite) {
        navigate('/blog/admindashboard')
    }
    return (
        <section className="LoginForm">
            <form onSubmit={handleSubmit}>
                <h1>Fazer Login</h1>
                <input type="text" placeholder="Seu Email" id="email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Sua Senha" id="password" value={password} onChange={handlePasswordChange} />
                {error && <p>{error}</p>}
                <input type="submit" value="Entrar" />
            </form>
        </section>
    )
}

export default LoginOn;
