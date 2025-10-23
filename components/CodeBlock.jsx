import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function CodeBlock({ code, language = 'bash', className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 flex items-center gap-2"
        aria-label={copied ? "Copiado" : "Copiar código"}
      >
        <FontAwesomeIcon 
          icon={copied ? faCheck : faCopy} 
          className={`w-3.5 h-3.5 ${copied ? 'text-green-400' : ''}`}
        />
        <span className="text-xs">{copied ? 'Copiado!' : 'Copiar'}</span>
      </button>
      <pre className="p-4 overflow-x-auto">
        <code className={`text-green-400 text-sm ${language ? `language-${language}` : ''}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
