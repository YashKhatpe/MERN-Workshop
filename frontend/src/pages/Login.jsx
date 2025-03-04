import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
    
        if (!email || !password) {
            setError("Please input all the fields properly");
            return;
        }
    
        const status = await login(email, password); // Get status from login function
        console.log("Status:", status);
    
        if (status === 200) {
            alert("Login Successful");
            navigate("/notes");
        } else if (status === 400) {
            setError("Invalid Credentials"); // Update UI error state
        } else {
            setError("Something went wrong. Please try again later.");
        }
    };
    
    return (
        <div className="app">
            <header className="app-header">
        <h1 className="app-title">Login</h1>
      </header>
        <form className="note-form" onSubmit={handleLogin}>
            <input className="note-input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className="note-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit" className="submit-button">Login</button>
            <div style={{textAlign: "center", paddingTop: "20px"}}>
                Dont have a account? 
                <Link to='/signup'>Signup</Link> 
            </div>
        </form>
        </div>
    );
};

export default Login;
