import React from 'react';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const schema = z.object({
  name: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Correo inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres')
});

const HomePage = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    toast({
      title: 'Formulario enviado',
      description: 'Gracias por contactarnos. Te responderemos pronto.'
    });
    reset();
  };

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
              )
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
              )
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
              )
            }
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
            }
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

      <section id="contact" className="max-w-7xl mx-auto py-16 px-4 w-full">
        <h2 className="text-3xl font-bold text-center text-dark-blue mb-12">Get In Touch</h2>
        <section className="max-w-full mx-auto mt-12 flex flex-col md:flex-row bg-card rounded-lg shadow-md overflow-hidden w-full">
          <div className="w-full p-8 md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6 text-foreground">Contáctanos</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                  Nombre
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  {...register('name')}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  className="w-full"
                />
                {errors.name && (
                  <p role="alert" className="mt-1 text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  {...register('email')}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  className="w-full"
                />
                {errors.email && (
                  <p role="alert" className="mt-1 text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  {...register('message')}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  rows={5}
                  className="w-full"
                />
                {errors.message && (
                  <p role="alert" className="mt-1 text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                Enviar
              </Button>
            </form>
          </div>
          <div className="w-full md:w-1/2 bg-gradient-to-tr from-primary/80 via-primary to-secondary/80 text-primary-foreground flex flex-col justify-center p-10">
            <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                <strong>Correo:</strong>{' '}
                <a href="mailto:contacto@agencia.com" className="underline hover:text-primary-foreground/90">
                  contacto@agencia.com
                </a>
              </p>
              <p>
                <strong>Dirección:</strong> Av. Principal 123, Ciudad, País
              </p>
              <p>
                <strong>Teléfono:</strong>{' '}
                <a href="tel:+1234567890" className="underline hover:text-primary-foreground/90">
                  +1 234 567 890
                </a>
              </p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
