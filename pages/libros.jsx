import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCode, faLightbulb, faHeart, faBrain } from "@fortawesome/free-solid-svg-icons";

const BookCard = ({ title, author, category, description, impact, recommendation }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{author}</p>
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <div className="border-l-4 border-blue-500 pl-4 my-4">
          <p className="text-gray-600 dark:text-gray-300 italic">{impact}</p>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Para quién es este libro: </span>
          {recommendation}
        </p>
      </div>
    </div>
  );
};

const CategorySection = ({ title, icon, children, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <FontAwesomeIcon icon={icon} className="mr-3 text-emerald-500" />
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};

const Libros = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todas las categorías", icon: faBook },
    { id: "espiritual", name: "Fundamentos Espirituales", icon: faHeart },
    { id: "estoicismo", name: "Estoicismo", icon: faBrain },
    { id: "tecnologia", name: "Desarrollo Profesional", icon: faCode },
    { id: "personal", name: "Desarrollo Personal", icon: faLightbulb },
    { id: "literatura", name: "Literatura", icon: faBook }
  ];

  const isCategoryVisible = (categoryId) => {
    return selectedCategory === "all" || selectedCategory === categoryId;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-400 to-green-600 dark:from-emerald-800 dark:to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Libros que transforman
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Esta es una colección personal de libros que han dejado una huella profunda en mi camino.
            Cada uno representa un momento de descubrimiento, un cambio de perspectiva o una nueva forma de entender el mundo.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                      : "hover:bg-gray-100 text-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <FontAwesomeIcon icon={category.icon} className="text-lg" />
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-12">
          <CategorySection 
            title="Fundamentos Espirituales" 
            icon={faHeart}
            isVisible={isCategoryVisible("espiritual")}
          >
            <BookCard
              title="La Biblia"
              author="Inspirada por Dios"
              description="El libro más importante en mi vida. La Palabra de Dios viva y eficaz que nos revela a Jesús y nos permite aceptar a Dios en nuestro corazón. A través de sus páginas, no solo conocemos el amor incondicional de Jesús y sus enseñanzas, sino que experimentamos el poder transformador de aceptar y recibir a Dios en nuestra vida."
              impact="Ha transformado completamente mi vida al permitirme aceptar y conocer a Dios personalmente a través de Su Palabra. Al abrir mi corazón a Sus enseñanzas, he encontrado no solo sabiduría y propósito, sino la verdadera salvación y una nueva vida en Cristo."
              recommendation="Para todo aquel que busque no solo conocer, sino aceptar y recibir a Dios en su vida a través de Su Palabra. Es el camino para encontrar la verdad, la salvación y experimentar una transformación personal genuina mediante una relación viva con Dios."
            />
          </CategorySection>

          <CategorySection 
            title="Estoicismo y Sabiduría Antigua" 
            icon={faBrain}
            isVisible={isCategoryVisible("estoicismo")}
          >
            <BookCard
              title="Meditaciones"
              author="Marco Aurelio"
              description="Un diario personal del emperador romano Marco Aurelio, que contiene reflexiones profundas sobre la vida, el deber y la naturaleza humana. Sus pensamientos sobre la resiliencia y la virtud son sorprendentemente relevantes hoy en día."
              impact="Me enseñó a mantener la perspectiva en momentos difíciles y a entender que la verdadera fortaleza viene de nuestros principios internos."
              recommendation="Para aquellos que buscan sabiduría práctica y herramientas para mantener la calma en medio del caos moderno."
            />

            <BookCard
              title="Cartas a Lucilio"
              author="Séneca"
              description="Una colección de cartas que abordan temas fundamentales como la felicidad, la muerte, la riqueza y la sabiduría. Séneca ofrece consejos prácticos y reflexiones profundas sobre cómo vivir una vida significativa."
              impact="Estas cartas me han servido como guía práctica para aplicar la filosofía estoica en la vida cotidiana y en mi desarrollo profesional."
              recommendation="Esencial para quienes buscan aplicar la filosofía antigua a los desafíos modernos."
            />

            <BookCard
              title="El ego es el enemigo"
              author="Ryan Holiday"
              description="Un análisis profundo de cómo nuestro ego puede sabotear nuestro éxito, relaciones y crecimiento personal. Holiday utiliza ejemplos históricos y principios estoicos para ilustrar las trampas del ego y cómo superarlas."
              impact="Me ayudó a identificar y manejar mi propio ego, especialmente en momentos de éxito o fracaso en mi carrera tecnológica."
              recommendation="Fundamental para profesionales ambiciosos que quieren mantener los pies en la tierra mientras persiguen grandes metas."
            />

            <BookCard
              title="La disciplina marcará tu destino"
              author="Ryan Holiday"
              description="Una exploración de cómo la disciplina diaria y los hábitos consistentes son la clave para alcanzar nuestras metas más importantes. Holiday combina filosofía estoica con ejemplos modernos."
              impact="Transformó mi aproximación al trabajo y al aprendizaje, ayudándome a establecer rutinas productivas y sostenibles."
              recommendation="Para aquellos que buscan convertir sus aspiraciones en realidad a través de la disciplina y la consistencia."
            />
          </CategorySection>

          <CategorySection 
            title="Desarrollo Profesional y Tecnología" 
            icon={faCode}
            isVisible={isCategoryVisible("tecnologia")}
          >
            <BookCard
              title="El libro negro del programador"
              author="Rafael Gómez Blanes"
              description="Una guía práctica y filosófica sobre cómo convertirse en un profesional destacado en el desarrollo de software. Va más allá del código, abordando aspectos como la ética, la gestión del tiempo y el desarrollo personal."
              impact="Este libro me ayudó a entender que ser programador va mucho más allá de escribir código. Me enseñó la importancia de desarrollar habilidades blandas y mantener una mentalidad de crecimiento continuo."
              recommendation="Ideal para desarrolladores que buscan elevar su carrera al siguiente nivel y entender la programación como una disciplina integral."
            />

            <BookCard
              title="De cero a uno: Cómo inventar el futuro"
              author="Peter Thiel"
              description="Una perspectiva única sobre innovación y creación de valor en el mundo tecnológico. Thiel desafía el pensamiento convencional sobre el emprendimiento y propone ideas provocativas sobre cómo crear algo verdaderamente nuevo."
              impact="Cambió mi forma de pensar sobre la innovación y me enseñó a buscar oportunidades únicas en lugar de seguir tendencias establecidas."
              recommendation="Perfecto para emprendedores tecnológicos y personas interesadas en entender cómo se crea verdadero valor en el mundo moderno."
            />

            <BookCard
              title="El almanaque de Naval Ravikant"
              author="Eric Jorgenson"
              description="Una colección curada de sabiduría de Naval Ravikant sobre riqueza, felicidad, y filosofía. Combina insights sobre tecnología, inversión y desarrollo personal."
              impact="Ha influido significativamente en mi forma de pensar sobre la creación de valor y la búsqueda de conocimiento."
              recommendation="Perfecto para profesionales tecnológicos que buscan una perspectiva holística sobre el éxito y la felicidad."
            />
          </CategorySection>

          <CategorySection 
            title="Desarrollo Personal" 
            icon={faLightbulb}
            isVisible={isCategoryVisible("personal")}
          >
            <BookCard
              title="El poder de la presencia"
              author="Amy Cuddy"
              description="Una investigación fascinante sobre cómo nuestra postura física y presencia pueden influir en nuestra mente y comportamiento. Cuddy presenta investigación científica sobre el poder del lenguaje corporal."
              impact="Me dio herramientas prácticas para manejar situaciones de alta presión y mejorar mi comunicación no verbal."
              recommendation="Excelente para profesionales que quieren mejorar su presencia e impacto en presentaciones y reuniones importantes."
            />
          </CategorySection>

          <CategorySection 
            title="Literatura" 
            icon={faBook}
            isVisible={isCategoryVisible("literatura")}
          >
            <BookCard
              title="La trilogía de Nueva York"
              author="Paul Auster"
              description="Una obra maestra de la literatura contemporánea que entrelaza misterio, identidad y metaficción. Tres historias interconectadas que cuestionan la realidad y la narrativa."
              impact="Me enseñó nuevas formas de pensar sobre la identidad y la narrativa, influyendo en mi aproximación a la resolución de problemas."
              recommendation="Para amantes de la literatura que disfrutan de historias complejas y reflexivas."
            />

            <BookCard
              title="Opio en las nubes"
              author="Rafael Chaparro Madiedo"
              description="Una novela experimental colombiana que rompe con las convenciones narrativas tradicionales. Un viaje psicodélico por la cultura urbana y la alienación moderna."
              impact="Me mostró el poder de la creatividad sin límites y la importancia de mantener una perspectiva única."
              recommendation="Para lectores que buscan experiencias literarias no convencionales y están dispuestos a desafiar sus expectativas."
            />
          </CategorySection>
        </div>
      </div>
    </div>
  );
};

export default Libros;