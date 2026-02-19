import React, { useRef, useState } from 'react';
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

  return (
    <div className="contact">
      <h1>Me contacter</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Informations</h3>
          <p>
            Vous avez un projet web en tête ou des questions ? N'hésitez pas à me contacter.
            Je vous répondrai dans les plus brefs délais.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <i className="icon-email">✉️</i>
              <div>
                <h4>Email</h4>
                <p>maxime@webetton.fr</p>
              </div>
            </div>
            
            <div className="contact-method">
              <i className="icon-location">📍</i>
              <div>
                <h4>Localisation</h4>
                <p>France</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
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
              ></textarea>
            </div>
            
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
            
            {submitMessage && (
              <div className={`submit-message ${submitSuccess ? 'success' : 'error'}`}>
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
