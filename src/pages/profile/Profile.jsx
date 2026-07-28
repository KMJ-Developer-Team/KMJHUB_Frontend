import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Profile(){
        const [user , setUser] = useState(null);
        const fetchProfile =  async ()=>{
            const response = await api.get("auth/profile/");
            console.log(response)
            setUser(response.data)
        }

        useEffect(()=>{
            fetchProfile();
        },[])
        if(!user){
            return <h2>Loading....</h2>;
        }
        return(
            <>
            
                <div>
                    <h2>User Name : {user.username}</h2>
                    <p>email : {user.email}</p>
                    <p>Phone Number : {user.phone_number}</p>
                    <p>favorite_games : {user.favourite_games}</p>
                    <p>Status : {user.is_staff ? "Staff" : "User"}</p>
                    
                </div>
            </>
        )
}