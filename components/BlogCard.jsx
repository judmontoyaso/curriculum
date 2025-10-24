import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faTag } from "@fortawesome/free-solid-svg-icons";

export default function BlogCard({
  img,
  createdAt,
  title,
  desc,
  slug,
  tagList = [],
  readTime = "5 min",
}) {
  const date = new Date(createdAt + 'T12:00:00Z');
  const formattedDate = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(date);

  // Asegurarse de que el slug tenga el formato correcto
  const fullSlug = slug.startsWith('/') ? slug : `/${slug}`;

  return (
    <Link href={fullSlug} className="group h-full">
      <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] dark:shadow-gray-700/30 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-48">
          {img ? (
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600" />
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Tags - Ahora fuera de la imagen */}
          {tagList.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tagList.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                >
                  <FontAwesomeIcon icon={faTag} className="mr-1 text-blue-500 dark:text-blue-400" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-500 dark:text-blue-400" />
              {formattedDate}
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-500 dark:text-blue-400" />
              {readTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors min-h-[4rem] leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 flex-grow text-base">
            {desc}
          </p>

          {/* Read More */}
          <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-medium pt-4 border-t border-gray-100 dark:border-gray-700">
            Leer más
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}