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
  const date = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);

  return (
    <Link href={`/blog/${slug}`} className="group">
      <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] dark:shadow-gray-700/30">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden">
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
          {/* Tags Overlay */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {tagList.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm"
              >
                <FontAwesomeIcon icon={faTag} className="mr-2 text-blue-500 dark:text-blue-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
            {desc}
          </p>

          {/* Read More */}
          <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium">
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