import React from 'react';
import axios from 'axios';

function RegisterPage() {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        salutation: '',
        marketingPreferences: [],
        country: ''
      };
    
      const [, setLocation] = useLocation();
      const [showSuccess, setShowSuccess] = useState(false);
      
      const handleSubmit = async (values, formikHelpers) => {
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/register`, values);
          console.log('Registration successful:', response.data);
          setLocation("/");
            
        } catch (error) {
          console.error('Registration failed:', error.response?.data || error.message);
          // Handle registration error (e.g., show error message)
        } finally {
          formikHelpers.setSubmitting(false);
        }
      };

  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" />
        </div>
        <div className="mb-3">
          <label className="form-label">Salutation</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="salutation" id="mr" value="Mr" />
              <label className="form-check-label" htmlFor="mr">Mr</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="salutation" id="ms" value="Ms" />
              <label className="form-check-label" htmlFor="ms">Ms</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="salutation" id="mrs" value="Mrs" />
              <label className="form-check-label" htmlFor="mrs">Mrs</label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Marketing Preferences</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="emailMarketing" />
            <label className="form-check-label" htmlFor="emailMarketing">Email Marketing</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="smsMarketing" />
            <label className="form-check-label" htmlFor="smsMarketing">SMS Marketing</label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country</label>
          <select className="form-select" id="country">
            <option value="">Select Country</option>
            <option value="sg">Singapore</option>
            <option value="my">Malaysia</option>
            <option value="in">Indonesia</option>
            <option value="th">Thailand</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;