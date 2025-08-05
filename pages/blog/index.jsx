import BlogCard from "../../components/BlogCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Blog({ localPosts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Get unique tags from all posts
  const allTags = [...new Set(localPosts.flatMap(post => post.tags || []))];

  // Filter posts based on search and tag
  const filteredPosts = localPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || (post.tags && post.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog Personal
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explorando desarrollo web, ciencia de datos y crecimiento personal
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <FontAwesomeIcon 
                  icon={faSearch} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              
              {/* Tag Filter */}
              <div className="relative min-w-[200px]">
                <FontAwesomeIcon 
                  icon={faFilter} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent appearance-none"
                >
                  <option value="">Todas las categorías</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No se encontraron artículos que coincidan con tu búsqueda.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.slug}
                img={post.image}
                createdAt={post.date}
                title={post.title}
                desc={post.description}
                slug={`posts/${post.slug}`}
                tagList={post.tags || []}
                readTime={post.readTime || "5 min"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // Get local blog posts
  const postsDirectory = path.join(process.cwd(), "pages/blog/posts");
  const filenames = fs.readdirSync(postsDirectory);
  
  const localPosts = filenames
    .filter(filename => filename.endsWith(".mdx") && filename !== "template.mdx" && filename !== "[slug].jsx")
    .map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      
      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image,
        tags: data.tags,
        readTime: data.readTime || "5 min",
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      localPosts,
    },
    revalidate: 3600, // Revalidate every hour
  };
};