import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {
    const { signup } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        if(!name || !email) {
            setError("Please input all the fields properly");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        await signup(name, email, password);
        alert("Signup Successful");
        navigate("/login");
    };

    return (
        <div className="app">
            <header className="app-header">
        <h1 className="app-title">Signup</h1>
      </header>
        <form className="note-form" onSubmit={handleSignup}>
            <input className="note-input" type="text" minLength={4} placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
            <input className="note-input" type="email" placeholder="Your Email address" onChange={(e) => setEmail(e.target.value)} />
            <div style={{ position: "relative" }}>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="note-input"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: "absolute", right: 10, top: 10, cursor: "pointer" }}
                >
                    {showPassword ? "Hide Password" : "Show Password"}
                </div>
            </div>
            <div style={{ position: "relative" }}>
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="note-input"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <div
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{ position: "absolute", right: 10, top: 10, cursor: "pointer" }}
                >
                    {showConfirmPassword ? "Hide Password" : "Show Password"}
                </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className="submit-button" type="submit">Signup</button>
            <div style={{textAlign: "center", paddingTop: "20px"}}>
                Already have a account? 
                <Link to='/login'>Login</Link> 
            </div>
        </form>
        </div>
    );
};

export default Signup;
