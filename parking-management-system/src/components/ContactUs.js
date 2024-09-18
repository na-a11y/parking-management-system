import React, { useState } from 'react';
import './ContactUs.css'; // Add custom CSS if needed

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to the backend)
    alert("Your message has been submitted!");
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-lg p-4">
              <h2 className="text-center mb-4">Contact Us</h2>
              <p className="text-muted text-center mb-4">
                If you have any questions or need support, feel free to reach out to us!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Your message"
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
