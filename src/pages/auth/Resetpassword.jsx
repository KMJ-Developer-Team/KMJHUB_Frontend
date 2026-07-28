import { useState } from "react"
import axios from "axios";
export default function ResetPassword() {
    const [email , setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    return (

        <div>
            <div>
                <h1>
                    Reset Password
                </h1>
                <h3>Enter your email and we will send you a link to reset your password</h3>
            </div>

            <div>
                <input type="email" placeholder="Enter your gmail." required/> 
                <button>Send reset Link</button>
            </div>

        </div>

    )

}