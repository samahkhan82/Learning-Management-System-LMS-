// src/components/Navbar.jsx

import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav >
            <h1>My LMS</h1>
            <div>
                <Link to="/" >Home</Link>
                <Link to="/courses" >Courses</Link>
                {user ? (
                    <>
                        <Link to="/dashboard" >Dashboard</Link>
                        <span >Welcome, {user.name}!</span>
                        <button onClick={logout} >Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" >Login</Link>
                        <Link to="/register" >Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
