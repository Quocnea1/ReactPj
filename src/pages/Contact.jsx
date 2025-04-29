import React from 'react';
import Header from '../components/Header';

const Contact = () => (
  <section
    id="Contact"
    className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative"
  >
    <Header className='fixed top-0 left-0 z-999' /> 
    <h2 className="text-3xl font-semibold mb-8">Contact</h2>
  </section>
);

export default Contact;
