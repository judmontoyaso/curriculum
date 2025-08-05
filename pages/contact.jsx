import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faLocationDot, 
  faPhone, 
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    numero: '',
    mensaje: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSending: false,
    isSent: false,
    error: null
  });

  // Inicializar EmailJS
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setFormStatus({
        isSending: false,
        isSent: false,
        error: 'Por favor completa todos los campos requeridos'
      });
      return;
    }

    setFormStatus({
      isSending: true,
      isSent: false,
      error: null
    });
    
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log('Email enviado!', result.text);
      
      setFormStatus({
        isSending: false,
        isSent: true,
        error: null
      });
      
      // Resetear el formulario después de enviar
      setFormData({
        nombre: '',
        email: '',
        numero: '',
        mensaje: ''
      });
      
      // Resetear el estado de éxito después de 5 segundos
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSent: false
        }));
      }, 5000);
      
    } catch (error) {
      console.error('Error al enviar email:', error);
      setFormStatus({
        isSending: false,
        isSent: false,
        error: 'Error al enviar el mensaje. Por favor intenta más tarde.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o proyecto interesante? Contáctame utilizando el formulario o a través de los siguientes medios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
          >
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Información de contacto
              </h2>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className="text-blue-500 dark:text-blue-400 text-xl" 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <a 
                    href="mailto:juandavidsolorzano73@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    juandavidsolorzano73@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <FontAwesomeIcon 
                    icon={faPhone} 
                    className="text-green-500 dark:text-green-400 text-xl" 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Teléfono</h3>
                  <a 
                    href="tel:+573001234567" 
                    className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                  >
                    +57 (300) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
                  <FontAwesomeIcon 
                    icon={faLocationDot} 
                    className="text-amber-500 dark:text-amber-400 text-xl" 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ubicación</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Medellín, Colombia
                  </p>
                </div>
              </div>
              
              {/* Redes sociales */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Sígueme en redes sociales
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/judmontoyaso" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FontAwesomeIcon 
                      icon={faGithub} 
                      className="text-gray-700 dark:text-gray-300 text-xl" 
                    />
                  </a>
                  <a 
                    href="https://linkedin.com/in/judmontoyaso" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    <FontAwesomeIcon 
                      icon={faLinkedin} 
                      className="text-blue-700 dark:text-blue-300 text-xl" 
                    />
                  </a>
                  <a 
                    href="https://twitter.com/judmontoyaso" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    <FontAwesomeIcon 
                      icon={faTwitter} 
                      className="text-blue-500 dark:text-blue-300 text-xl" 
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envíame un mensaje
            </h2>
            
            {formStatus.isSent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 text-green-700 dark:text-green-200 p-4 mb-6 rounded"
              >
                <p className="font-medium">¡Mensaje enviado correctamente!</p>
                <p>Gracias por contactarme. Te responderé a la brevedad.</p>
              </motion.div>
            ) : null}
            
            {formStatus.error ? (
              <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-200 p-4 mb-6 rounded">
                <p className="font-medium">Error al enviar el mensaje</p>
                <p>{formStatus.error}</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="numero" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Número de contacto
                </label>
                <input
                  type="tel"
                  id="numero"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Tu número de teléfono"
                />
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={formStatus.isSending}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white font-medium transition-colors duration-300 ${
                    formStatus.isSending 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {formStatus.isSending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;