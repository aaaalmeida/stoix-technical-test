import { useState } from "react"
import { login } from "../../service/taskService"
import { isPositiveStatusCode } from "../../utils/isPositiveStatusCode"
import { toast } from "react-toastify"
import "./style.css"

export const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await login(username, password)

            if (isPositiveStatusCode(res.status)) {
                const token = res.data.access_token
                localStorage.setItem("token", token)

                toast("Login efetuado com sucesso, agora você pode usar o sistema")
            } else {
                toast("Login sem sucesso :(")
                toast("Tente admin/admin como usuário e senha")
            }
        } catch (err) {
            console.error(err)
            toast("Erro ao tentar fazer login")
        }
    }


    return (
        <div id="login-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="user">Usuário</label>
                    <input type="text" id="user" required
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" required
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" id="login" value="LOGIN" />
            </form>
            <aside>Esse formulário serve apenas como demonstração de como seria um login. Tente admin/admin para poder fazer o login.</aside>
        </div>
    )
}