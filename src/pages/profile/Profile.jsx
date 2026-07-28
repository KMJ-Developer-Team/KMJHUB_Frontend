import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get("auth/profile/");
                console.log(response.data);
                setUser(response.data);
            } catch (error) {
                console.error(error);
                setError("Could not load profile.");
            }
        };

        fetchProfile();
    }, []);

    if (error) {
        return <h2>{error}</h2>;
    }

    if (!user) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2>Username: {user.username}</h2>
            <p>Email: {user.email}</p>
            <p>Phone number: {user.phone_number}</p>
            <p>Favourite games: {user.favourite_games}</p>
            <p>Status: {user.is_staff ? "Staff" : "User"}</p>
        </div>
    );
}