import './Register.css'

import { useAuthentication } from "../../hooks/useAuthentication";
import { useState, useEffect } from "react";

const Register = () => {

    const [displayName, setDisplayName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassowrd] = useState();
    const [error, setError] = useState();

    const {createUser, error: authErro, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword){
            setError("As senhas precisam ser iguais")
            return
        }

        const res = await createUser(user)

        console.log(user)
    }

    useEffect(() => {
        if(authErro){
            setError(authErro)
        }
    }, [authErro])

    return ( 
        <div>
            <h1>Cadastra-se para realizar sua compra</h1>
            
            <form onSubmit={handleSubmit}>
                
                <label>
                    <span>Nome:</span>
                    <input 
                        type="texte"
                        name="displayName"
                        required
                        placeholder="Nome do usuário"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}/>
                </label>

                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email do usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <label>
                    <span>Confirmação de senha</span>
                    <input 
                        type="password"
                        name="password"
                        required
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassowrd(e.target.value)}
                        />
                </label>

                {!loading && <button className="btn">Cadastrar</button>}
                {loading && (
                    <button className="btn" disabled>Aguarde...</button>
                )}
                {error && <p className="error">{error}</p>}

            </form>

        </div>
     );
}
 
export default Register;