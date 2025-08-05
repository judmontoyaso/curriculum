import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function BlogPost({
  title,
  date,
  image,
  description,
  children
}) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {title}
        </h1>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Image
              src="/profile.jpg"
              alt="Juan Montoya"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-3">
              <div className="text-gray-900 dark:text-white font-medium">Juan Montoya</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{date}</div>
            </div>
          </div>
          
          {/* Share buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href), "_blank")}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </button>
            <button
              onClick={handleCopyLink}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors relative"
              aria-label="Copy link"
            >
              <FontAwesomeIcon icon={faCopy} className="w-5 h-5" />
              {copySuccess && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded">
                  ¡Copiado!
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Featured image */}
        {image && (
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        {/* Description */}
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {description}
        </div>
      </header>

      {/* Main content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </div>
    </article>
  );
}