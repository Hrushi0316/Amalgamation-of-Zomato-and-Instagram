import { Link } from 'react-router-dom';
import './Auth.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const phone = e.target.phone.value;

        console.log(name,email,password,phone);

       const response = await axios.post("http://localhost:3000/auth/user/registration",
          {
            name,
            email,
            password,
            phone

        },{
            withCredentials: true
        })

        console.log(response.data);
        navigate('/home');
    }

  return (
    <div className='outer'>
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>User Registration</h2>

        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input id="name" type="text" placeholder="John Doe" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="+1 555 555 555" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Create a password" />
        </div>

        <button className="auth-button" type="submit">Register</button>

        <div className="auth-switch">
          <div className="small-note">Already have an account ? <Link to="/partner/login">Login</Link></div>
          <div className="small-note"><Link to="/partner/register">Register as Food Partner</Link></div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UserRegister;