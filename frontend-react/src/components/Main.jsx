import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'
const Main = () => {
  return (
    <>
    
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'> Stock Prediction Portal</h1>
        <p className='text-light lead'>**Project Overview:** We need to implement secure payment processing for our AI services SaaS platform using Stripe. The platform offers multiple AI-driven services with tiered pricing that require seamless payment integration. **Scope of Work:** - Integrate Stripe payment gateway for subscription-based services - Implement payment flows for multiple service tiers - Set up recurring billing for monthly subscriptions - Handle one-time payments for workshop bookings - Implement secure payment processing with proper error handling - Create upgrade/downgrade functionality between service tiers **Technical Requirements:** - Backend: FastAPI (Python) with SQLAlchemy ORM - Frontend: React with Material-UI - Database: PostgreSQL - Multi-currency support - Webhook integration for payment status updates - Test and production environment setup </p>
        <Button text="Login" class="btn-outline-info"/>
      </div>
      
    </div>
    
    </>
  )
}

export default Main