import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import GithubRepoCard from "./GithubRepoCard";

const GithubRepo = () => {
  const [repo, setRepo] = useState([]);

  useEffect(async () => {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:judmontoyaso+sort:author-date-asc`
    );

    let repos = res.data.items.splice(0, 6);

    setRepo(repos);
  }, []);

  if (typeof repo === undefined) {
    return "....";
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:mt-10 gap-y-20">
      {/* Single github Repo */}

      {repo.map((latestRepo, id) => (
        <GithubRepoCard latestRepo={latestRepo} key={latestRepo.id} />
      ))}
    </div>
  );
};

export default GithubRepo;
