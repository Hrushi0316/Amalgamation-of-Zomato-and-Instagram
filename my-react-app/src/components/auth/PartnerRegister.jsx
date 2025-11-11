import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PartnerRegister = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const owner = e.target.owner.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const password = e.target.password.value;   

        const response = await axios.post("http://localhost:3000/auth/foodPartner/registration",{
            owner,
            email,
            phone,
            address,
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
        <h2>Food Partner Registration</h2>

        <div className="form-group">
          <label htmlFor="owner">Owner name</label>
          <input id="owner" type="text" placeholder="Owner full name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Business email</label>
          <input id="email" type="email" placeholder="partner@restaurant.com" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Business phone</label>
          <input id="phone" type="tel" placeholder="+1 555 555 555" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input id="address" type="text" placeholder="Street, City, ZIP" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Create a password" />
        </div>

        <button className="auth-button" type="submit">Register</button>

        <div className="auth-switch">
          <div className="small-note">Already have a partner account? <Link to="/partner/login">Login</Link></div>
          <div className="small-note"><Link to="/user/register">Register as User</Link></div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default PartnerRegister;