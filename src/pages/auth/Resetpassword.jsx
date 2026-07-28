import { useState } from "react"
import api from "../../api/axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
    const { uid, token } = useParams()
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, SetSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit =

        async (e) => {
            e.preventDefault();
            setError("");
            SetSuccess("");
            if (password !== confirmPassword) {
                setError("Password does  not match");
            }
            try {
                setLoading(true)
                const response = await api.post("/auth/password-reset-confirm/",
                    {
                        uid: uid,
                        token: token,
                        password: password,
                        confirm_password: confirmPassword,
                    })
                SetSuccess(response.data.message);
                setLoading(false)
                // setTimeout(() => {    // firta pathauna user test garnai birsiyo pachi garamla.
                //     navigate("/login");
                // }, 2000);
            }
            catch (err) {
                console.log(err.response.data);

                setLoading(false)
            }
        }

    return (
        <>
            <div>
                <div>
                    <h1>reset password</h1>
                    <h3>Enter your new password and dont forget your passwords like this always use an authentication app.</h3>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="password" placeholder="New password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />

                        <button type="submit">
                            {loading ? "resetting...." : "reset password"}
                        </button>
                        {success && (
                            <p>{success}</p>
                        )}
                        {error && (
                            <p>{error}</p>
                        )}
                    </form>
                </div>
            </div>
        </>


    )

}