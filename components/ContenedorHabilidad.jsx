const ContenedorHabilidad = ({ Habilidad }) => {
  return (
    <span key={Habilidad} className="rounded-xl bg-gray-300 dark:bg-gray-500 px-3 mr-2 mb-2 hover:bg-indigo-400 hover:text-white dark:hover:bg-green-400 cursor-pointer">
      {Habilidad}
    </span>
  );
};

export default ContenedorHabilidad;
