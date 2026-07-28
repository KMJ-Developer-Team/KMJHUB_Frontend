import { useState } from "react";
import api from "../../api/axios";







export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error,setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post(
                "/auth/password-reset/",
                {
                    email: email,
                }
            );
            setSuccess(response.data.message);
            setEmail("");
        }
        catch (err) {
                setError("Something went wrong.");
        }

    }
    return (

        <div>
            <div>
                <h1>Forgot password</h1>
                <h3>Hellow , enter your email and i will</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
                    <button type="submit" >
                        Send Reset Link
                    </button>
                </form>
                {success && (
                    <p className="text-green-600">{success}</p>
                )}
            </div>
        </div>

    )

}

