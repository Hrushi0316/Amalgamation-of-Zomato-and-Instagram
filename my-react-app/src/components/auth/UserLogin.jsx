import { Link } from 'react-router-dom';
import './Auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UserLogin = () => {

    const navigate = useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const email = e.target['user-email'].value;
        const password = e.target['user-password'].value;

        try{
            const response = await axios.post("http://localhost:3000/auth/user/login",{
            email,
            password
       },{
           withCredentials: true
       })
         console.log(response);
         navigate('/home');

        }
        catch(error){
            console.error("Login failed:", error);
            alert("Login failed. Please check your credentials and try again.");
        }   
    }

  return (
    <div className='outer'>
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>User Login</h2>

        <div className="form-group">
          <label htmlFor="user-email">Email</label>
          <input id="user-email" type="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="user-password">Password</label>
          <input id="user-password" type="password" placeholder="••••••••" />
        </div>

        <button className="auth-button" type="submit">Login</button>

        <div className="auth-switch">
          <div className="small-note">Don't have an account? <Link to="/user/register">Register</Link></div>
          <div className="small-note"><Link to="/partner/login">Login as Food Partner</Link></div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UserLogin;