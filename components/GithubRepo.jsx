import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import GithubRepoCard from "./GithubRepoCard";
import { text } from "@fortawesome/fontawesome-svg-core";

const GithubRepo = () => {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get(
          `https://api.github.com/search/repositories?q=user:judmontoyaso+sort:author-date-asc`
        );
        const repos = res.data.items.sort((a, b) => -(a.id - b.id));
        setRepo(repos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error al cargar los repositorios: {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {/* Single github Repo */}

      {repo.map((latestRepo) => (
        <GithubRepoCard key={latestRepo.id} latestRepo={latestRepo} />
      ))}
    </div>
    
  );
};

export default GithubRepo;
