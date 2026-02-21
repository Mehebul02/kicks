'use client'
import { useState } from 'react'
import Container from '../shared/Container'
import Newsletter from './Newsletter'
import FooterMenu from './FooterMenu'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }
  return (
    <Container>
      <footer className="bg-primary rounded-t-4xl">
        {/* Newsletter Section */}
        <Newsletter handleSubmit={handleSubmit} email={email} setEmail={setEmail} />
        {/* Main Footer */}
        <FooterMenu />
      </footer>
      {/* Copyright */}
      <div className=" border-gray-700 py-4 text-center text-[#232321] text-[16px] ">
        <p>© All rights reserved</p>
      </div>

    </Container>
  );
};

export default Footer;