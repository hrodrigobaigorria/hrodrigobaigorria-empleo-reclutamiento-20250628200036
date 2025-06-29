import React from 'react';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white-lilac via-white to-white p-6 flex flex-col">
      <header className="sticky top-0 bg-white backdrop-blur-md bg-opacity-70 shadow-md z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-bold text-tyrian-purple">HR Agency</div>
          <ul className="hidden md:flex space-x-8 text-dark-blue">
            <li><a href="#home" className="hover:text-fuchsia transition">Home</a></li>
            <li><a href="#services" className="hover:text-fuchsia transition">Services</a></li>
            <li><a href="#stats" className="hover:text-fuchsia transition">Stats</a></li>
            <li><a href="#team" className="hover:text-fuchsia transition">Team</a></li>
            <li><a href="#testimonials" className="hover:text-fuchsia transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-fuchsia transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto my-12 md:my-24 gap-12"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark-blue leading-tight">
            Empower Your Workforce
          </h1>
          <p className="mt-4 text-lg text-dark-blue/80 max-w-md">
            Connecting talented professionals with visionary companies to build thriving teams.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-tyrian-purple text-white rounded-lg font-semibold transition hover:bg-fuchsia"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="px-6 py-3 border-2 border-tyrian-purple text-tyrian-purple rounded-lg font-semibold transition hover:bg-tyrian-purple hover:text-white"
            >
              Our Services
            </a>
          </div>
        </div>
        <div className="flex-1 max-w-lg overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80"
            alt="Professional business meeting"
            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            loading="lazy"
          />
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-dark-blue mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Talent Acquisition',
              description: 'We find the best talent tailored to your hiring needs and company culture.',
              icon: (
                <svg
                  className="w-12 h-12 text-tyrian-purple mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M17 20h5v-2a4 4 0 0 0-3-3.87" />
                  <path d="M9 4v16" />
                  <path d="M9 4a4 4 0 0 1 8 0v16" />
                  <path d="M9 14h4" />
                </svg>
              ),
            },
            {
              title: 'Consulting & Strategy',
              description: 'Optimize your HR processes with personalized consulting services.',
              icon: (
                <svg
                  className="w-12 h-12 text-tyrian-purple mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              ),
            },
            {
              title: 'Training & Development',
              description: 'Empower your employees with training programs that drive success.',
              icon: (
                <svg
                  className="w-12 h-12 text-tyrian-purple mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4v16h16" />
                  <path d="M4 9h16m-8 4h8m-8 4h8" />
                </svg>
              ),
            },
          ].map(({ title, description, icon }) => (
            <article
              key={title}
              className="bg-white-lilac rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              {icon}
              <h3 className="text-xl font-semibold text-tyrian-purple mb-2">{title}</h3>
              <p className="text-dark-blue/80">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="stats" className="bg-gradient-to-r from-tyrian-purple to-fuchsia text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-extrabold">500+</p>
            <p className="mt-2 text-lg font-medium">Companies Served</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold">1000+</p>
            <p className="mt-2 text-lg font-medium">Successful Placements</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold">95%</p>
            <p className="mt-2 text-lg font-medium">Client Satisfaction</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-dark-blue mb-12">What Our Clients Say</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              name: 'Jessica Turner',
              role: 'HR Manager',
              avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
              text: 'The team helped us find exactly the right candidates quickly and efficiently. Truly professional service!'
            },
            {
              name: 'Carlos Martínez',
              role: 'CEO',
              avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
              text: 'They transformed our recruitment process, saving us time and improving quality hires significantly.'
            },
            {
              name: 'Maya Patel',
              role: 'Talent Acquisition Lead',
              avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
              text: 'Highly recommended agency with a hands-on approach and attentive team. Our go-to HR partner.'
            }
          ].map(({ name, role, avatar, text }) => (
            <figure
              key={name}
              className="bg-white-lilac rounded-xl p-6 shadow-md flex flex-col items-center text-center"
            >
              <img
                src={avatar}
                alt={`Avatar of ${name}`}
                loading="lazy"
                className="w-20 h-20 rounded-full mb-4 shadow-lg object-cover"
              />
              <blockquote className="italic text-dark-blue/90 mb-4">“{text}”</blockquote>
              <figcaption className="font-semibold text-tyrian-purple">{name}</figcaption>
              <span className="text-sm text-dark-blue/70">{role}</span>
            </figure>
          ))}
        </div>
      </section>

      <section id="team" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-dark-blue mb-12">Meet Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            {
              name: 'Alicia Smith',
              role: 'Founder & CEO',
              photo: 'https://randomuser.me/api/portraits/women/65.jpg'
            },
            {
              name: 'John Doe',
              role: 'Senior Recruiter',
              photo: 'https://randomuser.me/api/portraits/men/36.jpg'
            },
            {
              name: 'Sofia Lopez',
              role: 'HR Consultant',
              photo: 'https://randomuser.me/api/portraits/women/44.jpg'
            },
            {
              name: 'Michael Chen',
              role: 'Training Specialist',
              photo: 'https://randomuser.me/api/portraits/men/48.jpg'
            },
          ].map(({ name, role, photo }) => (
            <div
              key={name}
              className="bg-white-lilac rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6 hover:shadow-xl transition-shadow"
            >
              <img
                src={photo}
                alt={`Photo of ${name}`}
                loading="lazy"
                className="w-28 h-28 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-tyrian-purple mb-1">{name}</h3>
              <p className="text-dark-blue/80 text-center">{role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-dark-blue mb-12">Get In Touch</h2>
        <form
          action="#"
          className="max-w-xl mx-auto bg-white-lilac rounded-xl p-8 shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-dark-blue font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-dark-blue/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tyrian-purple"
              placeholder="Your full name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-dark-blue font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border border-dark-blue/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tyrian-purple"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-dark-blue font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-md border border-dark-blue/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tyrian-purple"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-tyrian-purple text-white font-semibold py-3 rounded-lg hover:bg-fuchsia transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
