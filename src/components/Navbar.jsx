import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className='flex justify-around pb-12'>
            <h2>KMJ Hub</h2>

            <div className='flex  justify-between w-200'>
                <Link to ="/home"> Home</Link>
                <Link to ="/login"> Login</Link>
                <Link to ="/register"> Register</Link>
                <Link to ="/forgot-password"> Forgot Password</Link>
            </div>
        </nav>
    )
}