import { Link } from 'react-router-dom';
import './Auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PartnerLogin = () => {
    const navigate = useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const email = e.target['partner-email'].value;
        const password = e.target['partner-password'].value;

        const response = await axios.post("http://localhost:3000/auth/foodPartner/login",{
            email,
            password
        },{
            withCredentials: true
        });
        console.log(response);

        navigate('/food/create');
    }
    
  return (
    <div className='outer'>
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Food Partner Login</h2>

        <div className="form-group">
          <label htmlFor="partner-email">Business Email</label>
          <input id="partner-email" type="email" placeholder="partner@restaurant.com" />
        </div>

        <div className="form-group">
          <label htmlFor="partner-password">Password</label>
          <input id="partner-password" type="password" placeholder="••••••••" />
        </div>

        <button className="auth-button" type="submit">Login</button>

        <div className="auth-switch">
          <div className="small-note">Don't have a partner account? <Link to="/partner/register">Register</Link></div>
          <div className="small-note"><Link to="/user/login">Login as User</Link></div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default PartnerLogin;