import React, { useState, useContext } from 'react';
import './AuthComponent.css';
import {MyContext} from '../context/ContextApi'

const AuthComponent = () => {

    const {isSignUp, formData, otpSent, isLoading, handleInputChange, handleGetOTP, handleSignIn, handleSignUp, toggleMode, resendOTP} = useContext(MyContext);
 

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-form-section">
          <div className="auth-header">
            <div className="logo-container">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="logo-text">HD</span>
            </div>
          </div>

          <div className="form-content">
            <h1 className="form-title">
              {isSignUp ? 'Sign up' : 'Sign in'}
            </h1>
            <p className="form-subtitle">
              {isSignUp 
                ? 'Sign up to enjoy the feature of Note Making' 
                : 'Please login to continue to your account.'
              }
            </p>

            {isSignUp ? (
              <form onSubmit={otpSent ? handleSignUp : handleGetOTP} className="auth-form">
                {!otpSent ? (
                  <>
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">Your Name</label>
                      <input
                        type="text"
                        id="fullName"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Jonas Khanwald"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="jonas_kahnwald@gmail.com"
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      className={`primary-button ${isLoading ? 'loading' : ''}`}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : 'Get OTP'}
                    </button>
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <label htmlFor="otp" className="form-label">OTP</label>
                      <div className="otp-input-container">
                        <input
                          type="text"
                          id="otp"
                          name="otp"
                          value={formData.otp}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Enter OTP"
                          maxLength={6}
                          required
                        />
                      
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className={`primary-button ${isLoading ? 'loading' : ''}`}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Verifying...' : 'Sign up'}
                    </button>

                    <button 
                      type="button" 
                      className="resend-button"
                      onClick={resendOTP}
                      disabled={isLoading}
                    >
                      Resend OTP
                    </button>
                  </>
                )}

                <div className="form-footer">
                  <span className="footer-text">Already have an account?? </span>
                  <button 
                    type="button" 
                    className="toggle-button"
                    onClick={toggleMode}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSignIn} className="auth-form">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="jonas_kahnwald@gmail.com"
                    required
                  />
                </div>

                {!otpSent ? (
                  <button 
                    type="button" 
                    className={`primary-button ${isLoading ? 'loading' : ''}`}
                    onClick={handleGetOTP}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Get OTP'}
                  </button>
                ) : (
                  <>
                    <div className="form-group">
                      <label htmlFor="otp" className="form-label">OTP</label>
                      <div className="otp-input-container">
                        <input
                          type="text"
                          id="otp"
                          name="otp"
                          value={formData.otp}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Enter OTP"
                          maxLength={6}
                          required
                        />
                       
                      </div>
                    </div>

                    <button 
                      type="button" 
                      className="resend-link"
                      onClick={resendOTP}
                      disabled={isLoading}
                    >
                      Resend OTP
                    </button>
                  </>
                )}
                {otpSent && (
                  <>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="keepLoggedIn"
                          checked={formData.keepLoggedIn}
                          onChange={handleInputChange}
                          className="checkbox-input"
                        />
                        <span className="checkbox-text">Keep me logged in</span>
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      className={`primary-button ${isLoading ? 'loading' : ''}`}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>
                  </>
                )}

                <div className="form-footer">
                  <span className="footer-text">Need an account? </span>
                  <button 
                    type="button" 
                    className="toggle-button"
                    onClick={toggleMode}
                  >
                    Create one
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="auth-background-section">
          <div className="background-gradient"></div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;