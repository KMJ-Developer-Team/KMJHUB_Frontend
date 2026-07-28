import { useState } from "react"
import api from "../../api/axios"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate();
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirm_password, setConfirmPassword] = useState("")
    const [accept_terms, setAcceptTerms] = useState(false)

    const [regError, setRegError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password != confirm_password) {
            setRegError("Password do not match")
            return;
        }

        if (!accept_terms) {
            setRegError("Please accept terms and poilicy")
            return;
        }
        setLoading(true)

        try {
            const sendData = await api.post(
                'api/v1/auth/register_user/',
                {
                    username,
                    email,
                    phone_number,
                    password,
                    confirm_password, 
                    accept_terms,
                }
            )
            navigate("/login")
            console.log(sendData)
        }
        catch (error) {
            console.log(error);
            console.log(error.response);
            console.log(error.response.data.password);
            setRegError("Registration Failed")
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <>
            <div className="">
                <div className="">
                    <form className="" onSubmit={handleRegister}>
                        <div className="">
                            <input
                                type="text"
                                className=""
                                placeholder="username"
                                value={username}
                                required
                                onChange={(e) => { setUserName(e.target.value) }}
                            />
                        </div>
                        <div className="">
                            <input
                                type="email"
                                className=""
                                placeholder="email"
                                value={email}
                                required
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div className="">
                            <input
                                type="number"
                                className=""
                                placeholder="phone number"
                                value={phone_number}
                                required
                                onChange={(e) => { setPhoneNumber(e.target.value) }}
                            />
                        </div>
                        <div className="">
                            <input
                                type="password"
                                className=""
                                placeholder="password"
                                value={password}
                                required
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>
                        <div className="">
                            <input
                                type="password"
                                className=""
                                placeholder="confirm password"
                                value={confirm_password}
                                required
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                            />
                        </div>
                        <div className="">
                            <label  className="">Accept Terms
                                <input
                                    type="checkbox"
                                    className=""
                                    checked= {accept_terms}
                                    onChange={(e) => { setAcceptTerms(e.target.checked) }}
                                />
                            </label>

                        </div>
                        <div className="">
                            <button
                                className=""
                                type="submit"
                                disabled= {loading}
                            >
                                {loading ? "Registering" : "Register"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )

}