import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"/></svg>) },
  { href: 'https://twitter.com', label: 'Twitter', svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.373 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.897 4.897 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.209c9.056 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>) },
  { href: 'https://instagram.com', label: 'Instagram', svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>) },
  { href: 'https://linkedin.com', label: 'LinkedIn', svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.07 2.07 0 11.001-4.139 2.07 2.07 0 01-.001 4.139zM6.814 20.452H3.86V9h2.954v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.4 0 22.225 0z"/></svg>) }
];

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' }
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111111', color: '#eee', padding: '2rem 1rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: '1 1 200px', marginBottom: '1rem' }}>
          <h3>Contact Us</h3>
          <address style={{ fontStyle: 'normal', lineHeight: 1.5 }}>
            123 Main Street<br />
            City, State 12345<br />
            Phone: (123) 456-7890<br />
            Email: info@example.com
          </address>
        </div>
        <nav style={{ flex: '1 1 200px', marginBottom: '1rem' }} aria-label="Footer navigation">
          <h3>Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} style={{ color: '#eee', textDecoration: 'none' }}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ flex: '1 1 200px', marginBottom: '1rem' }}>
          <h3>Follow Us</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {socialLinks.map(({ href, label, svg }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{ color: '#eee' }}>
                {svg}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#aaa' }}>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
