import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    emailjs
      .sendForm(
        'service_81y7t7n',
        'template_lh5s4xm',
        form.current,
        'opEb_VR5aR3dv6VNJ'
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setSubmitMessage('Votre message a été envoyé avec succès !');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitSuccess(false);
          setSubmitMessage('Une erreur est survenue. Veuillez réessayer.');
          console.error('EmailJS error:', error.text);
        }
      );
  };

  // Structured Data pour la page Contact
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacter WeBetton - Développeur Web Freelance Lyon",
    "description": "Contactez WeBetton pour un devis gratuit. Développeur web freelance à Lyon spécialisé React, PHP, JavaScript.",
    "url": "https://webetton.fr/contact",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "WeBetton",
      "email": "maxime@webetton.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lyon",
        "addressRegion": "Auvergne-Rhône-Alpes",
        "addressCountry": "FR"
      }
    }
  };

  return (
    <div className="contact">
      <Helmet>
        <title>Contact | WeBetton - Développeur Web Freelance Lyon - Devis Gratuit</title>
        <meta name="description" content="Contactez WeBetton pour un devis gratuit. Développeur web freelance à Lyon, je réalise votre site internet ou application web sur mesure en React, PHP, JavaScript." />
        <meta name="keywords" content="contact développeur web lyon, devis site internet lyon, devis gratuit web, freelance web lyon contact" />
        <link rel="canonical" href="https://webetton.fr/contact" />
        <meta property="og:title" content="Contact | WeBetton - Devis Gratuit Développement Web" />
        <meta property="og:description" content="Contactez-moi pour un devis gratuit. Développeur web freelance à Lyon." />
        <meta property="og:url" content="https://webetton.fr/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(contactJsonLd)}</script>
      </Helmet>

      <h1>Contactez-moi — Devis Gratuit</h1>
      <div className="contact-container">
        <aside className="contact-info" aria-label="Informations de contact">
          <h2>Informations</h2>
          <p>
            Vous avez un <strong>projet web</strong> en tête ou des questions ? 
            N'hésitez pas à me contacter pour obtenir un <strong>devis gratuit</strong>. 
            Je vous répondrai dans les plus brefs délais.
          </p>
          
          <div className="contact-methods">
            <address className="contact-method">
              <span className="icon-email" aria-hidden="true">✉️</span>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:maxime@webetton.fr">maxime@webetton.fr</a></p>
              </div>
            </address>
            
            <div className="contact-method">
              <span className="icon-location" aria-hidden="true">📍</span>
              <div>
                <h3>Localisation</h3>
                <p>Lyon, France</p>
              </div>
            </div>
          </div>
        </aside>
        
        <div className="contact-form">
          <form ref={form} onSubmit={handleSubmit} aria-label="Formulaire de contact">
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Votre nom"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="votre@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sujet de votre message"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Décrivez votre projet ou posez votre question..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn" disabled={isSubmitting} aria-busy={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
            
            {submitMessage && (
              <div className={`submit-message ${submitSuccess ? 'success' : 'error'}`} role="alert">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
