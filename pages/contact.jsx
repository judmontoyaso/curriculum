import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs, {send} from 'emailjs-com'
import { useState } from "react";
import Swal from "sweetalert2";

const contact = () => {
  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  function SendEmail(object) {
    emailjs.send("formulario_contacto_cv",
    "template_5243rb1",
    object,
    "user_DD9uUMu5CFcOAGZ2Ah34m")
        .then((result) => {
            console.log(result.text)
            Swal.fire("Enviado!", "El mensaje se ha enviado", "success");
        }, (error) => {
            console.log(error.text)
        })
}

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      mensaje: "",
      numero: contactNumber,
    },

    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string().required("El email es obligatorio"),
      mensaje: Yup.string().required("El mensaje  es obligatorio"),
    }),

    //Onsubmit create predio
    onSubmit: async (valores) => {
        generateContactNumber();
      const { nombre, email, mensaje, numero } = valores;

      
      try {
      SendEmail(valores);
      console.log(valores);
      } catch (error) {
        console.log(error);
      }

      console.log("enviando");
      console.log(valores);
    },
  });
  return (
    <div className="flex justify-center">
      <form
        class="flex w-full max-w-sm space-x-3"
        onSubmit={formik.handleSubmit}
      >
        <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact us !
          </div>
          <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div class="col-span-2 lg:col-span-1">
              <div class=" relative ">
                <input
                  type="text"
                  id="nombre"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Name"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.nombre && formik.errors.nombre ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="front-bold">Error</p>
                  <p>{formik.errors.nombre}</p>
                </div>
              ) : null}
            </div>
            <div class="col-span-2 lg:col-span-1">
              <div class=" relative ">
                <input
                  type="text"
                  id="email"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="front-bold">Error</p>
                  <p>{formik.errors.email}</p>
                </div>
              ) : null}
            </div>
            <div class="col-span-2">
              <label class="text-gray-700" for="name">
                <textarea
                  class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="mensaje"
                  placeholder="Enter your comment"
                  name="mensaje"
                  rows="5"
                  cols="40"
                  value={formik.values.mensaje}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
              </label>
            </div>
            {formik.touched.mensaje && formik.errors.mensaje ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="front-bold">Error</p>
                <p>{formik.errors.mensaje}</p>
              </div>
            ) : null}

            <input
              type="hidden"
              name="contact_number"
              value={formik.values.numero}
            />
            <div class="col-span-2 text-right">
              <button
                type="submit"
                class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default contact;
