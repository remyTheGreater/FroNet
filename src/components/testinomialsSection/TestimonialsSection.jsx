import React from "react";
import './TestimonialsSection.scss';

function TestimonialsSection() {
  return (
    <div className="testimonials">
      <div className="testimonial-content">
        <h2 className="testimonial-header">Customer Testimonials</h2>
        <p className="testimonial-subheader">
          Read what our customers are saying about us
        </p>
        <button className="testimonial-button">Read More</button>
      </div>
      <div className="testimonial-gallery">
        <div className="testimonial-card">
          <span className="quote-icon">&#8220;</span>
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod turpis nisi, vel aliquet ipsum elementum a. Nullam
            suscipit vitae neque vel mattis. Quisque aliquam massa in
            fringilla rutrum. Aliquam non dolor libero.
          </p>
          <div className="testimonial-profile">
            <img
              className="profile-photo"
              src="https://via.placeholder.com/50x50"
              alt="Profile"
            />
            <div className="profile-info">
              <p className="profile-name">John Doe</p>
              <p className="profile-role">CEO at Company Name</p>
            </div>
            <div className="rating-meter"></div>
          </div>
        </div>
        <div className="testimonial-card">
          <span className="quote-icon">&#8220;</span>
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod turpis nisi, vel aliquet ipsum elementum a. Nullam
            suscipit vitae neque vel mattis. Quisque aliquam massa in
            fringilla rutrum. Aliquam non dolor libero.
          </p>
          <div className="testimonial-profile">
            <img
              className="profile-photo"
              src="https://via.placeholder.com/50x50"
              alt="Profile"
            />
            <div className="profile-info">
              <p className="profile-name">Jane Smith</p>
              <p className="profile-role">Marketing Manager</p>
            </div>
            <div className="rating-meter"></div>
          </div>
        </div>
        <div className="testimonial-card">
          <span className="quote-icon">&#8220;</span>
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod turpis nisi, vel aliquet ipsum elementum a. Nullam
            suscipit vitae neque vel mattis. Quisque aliquam massa in
            fringilla rutrum. Aliquam non dolor libero.
          </p>
          <div className="testimonial-profile">
            <img
              className="profile-photo"
              src="https://via.placeholder.com/50x50"
              alt="Profile"
            />
            <div className="profile-info">
              <p className="profile-name">Tom Wilson</p>
              <p className="profile-role">Software Developer</p>
            </div>
            <div className="rating-meter"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
