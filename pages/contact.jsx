import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";
import { Particle } from "../components/Particle";
import { useTheme } from "next-themes";

// export async function getServerSideProps(context) {
//     const client = await clientPromise;

//     const db = client.db("curriculum");

//     let likes = await db.collection("likes").find({}).toArray();
//     likes = JSON.parse(JSON.stringify(likes[0].likes));

//     return {
//       props: { likes },
//     };
//   }

const Contact = () => {
  const { resolvedTheme } = useTheme();
  const numStr = "000000" + ((Math.random() * 1000000) | 0);
  const numero = numStr.substring(numStr.length - 6);
  const [contactNumber, setContactNumber] = useState(numero);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  console.log(loading);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_your_service_id', 'template_your_template_id', form.current, 'your_public_key')
      .then((result) => {
        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Gracias por contactarme, te responderé lo antes posible.',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        form.current.reset();
      }, (error) => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      mensaje: "",
      numero: contactNumber,
    },

    validationSchema: Yup.object({
      nombre: Yup.string().required("No olvides escribir tu nombre"),
      email: Yup.string().required("Escribe tu email para poder responderte"),
      mensaje: Yup.string().required("Escribe algún mensaje"),
    }),

    onSubmit: async (valores) => {
      setLoading(true);
      console.log(loading);

      const { nombre, email, mensaje, numero } = valores;

      try {
        sendEmail(e);
      } catch (error) {
        console.log(error);
      }

      console.log(loading);
    },
  });
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative">
      <Particle />
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Contáctame
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            ¿Tienes alguna pregunta o propuesta? ¡Escríbeme!
          </p>
        </div>
        <div className="mt-12">
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nombre
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Mensaje
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
