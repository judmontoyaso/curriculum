import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs, { send } from "emailjs-com";
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
  const {resolvedTheme } = useTheme();
  const numStr = "000000" + ((Math.random() * 1000000) | 0);
  const numero = numStr.substring(numStr.length - 6);
  const [contactNumber, setContactNumber] = useState(numero);
  const [loading, setLoading] = useState(false)
 

console.log(loading)


  function SendEmail(object) {
 
    emailjs
      .send(
        "formulario_contacto_cv",
        "template_5243rb1",
        object,
        "N6pIVzH5Sti9MeJbI"
      )
      .then(
        (result) => {
          console.log(result.text);
         
          toast.success('Gracias por escribirme, me pondré en contácto pronto!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: resolvedTheme === "dark" ? "dark" : "light",
            transition: Flip

            });setLoading(false);

           
           
          // Swal.fire(
          //   "Enviado!",
          //   "Gracias por escribirme, me pondré en contácto pronto",
          //   "success"
          // );
          formik.resetForm();
        },
        (error) => {


          toast.error('Ocurrio un error, por favor intente más tarde', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: resolvedTheme === "dark" ? "dark" : "light",
            transition: Flip

            });
          // Swal.fire(
          //   "Error",
          //   "Ocurrio un error, por favor intente más tarde",
          //   "error"
          // );
          console.log(error.text);
        }
      ); 
  }

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
      setLoading(true)
      console.log(loading);

      const { nombre, email, mensaje, numero } = valores;

      try {
        SendEmail(valores);
      
      } catch (error) {
        console.log(error);
     

      }

      console.log(loading);

    },
  });
  return (
    <div>
      <div>
        <span className="text-center"></span>
      </div>
      <div className="flex justify-center ">
        <Particle />

        <form
          className="flex w-3/4 max-w-sm space-x-3 lg:w-full lg:max-w-max"
          onSubmit={formik.handleSubmit}
        >
           <ToastContainer/>
          <div className="w-full max-w-full lg:max-w-full px-5 py-10 m-auto mt-10 bg-white rounded-xl shadow-2xl dark:bg-gray-800 transition-colors duration-1000 dark:shadow-inner">
            <div className="mb-10 text-3xl font-light text-center text-gray-800 dark:text-white">
              <span className="font-semibold ">¡ Contáctame !</span>
            </div>
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="nombre"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="Nombre"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.nombre && formik.errors.nombre ? (
                  <div className="my-2 bg-red-100 border-l-4 border-red-500  rounded-2xl text-red-700 p-4">
                    <p className="front-bold">Ups!</p>
                    <p>{formik.errors.nombre}</p>
                  </div>
                ) : null}
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="email"
                    id="email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-300  focus:border-transparent"
                    placeholder="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="my-2 bg-red-100 border-l-4 border-red-500 rounded-2xl text-red-700 p-4">
                    <p className="front-bold">Ups!</p>
                    <p>{formik.errors.email}</p>
                  </div>
                ) : null}
              </div>
              <div className="col-span-2">
                <label className="text-gray-700" htmlFor="name">
                  <textarea
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-300  focus:border-transparent"
                    id="mensaje"
                    placeholder="Ingresa tu comentario"
                    name="mensaje"
                    rows="5"
                    cols="40"
                    value={formik.values.mensaje}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </label>
                {formik.touched.mensaje && formik.errors.mensaje ? (
                  <div className="my-2 bg-red-100 border-l-4 border-red-500 rounded-2xl text-red-700 p-4">
                    <p className="front-bold">Ups!</p>
                    <p>{formik.errors.mensaje}</p>
                  </div>
                ) : null}
              </div>

              <input
                type="hidden"
                name="contact_number"
                value={formik.values.numero}
              />
              <div className="col-span-2 text-right">
                
                <button
                  type="submit"
                  className="py-2 px-4  bg-indigo-600 hover:bg-green-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                >
              <span className="h-screen w-full flex justify-center items-center">
      <span className="animate-spin relative flex h-10 w-10 rounded-sm bg-purple-400 opacity-75"></span>
    </span>
    
                  {!loading ? "Enviar" : "Enviando"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
