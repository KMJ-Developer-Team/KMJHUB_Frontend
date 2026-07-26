import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className='flex justify-around pb-12'>
            <h2>KMJ Hub</h2>

            <div className='flex  justify-between w-200'>
                <Link to ="/"> Home</Link>
                <Link to ="/"> Login</Link>
                <Link to ="/"> Register</Link>
            </div>
        </nav>
    )
}