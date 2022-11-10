import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import GithubRepoCard from "./GithubRepoCard";
import { text } from "@fortawesome/fontawesome-svg-core";

const GithubRepo = () => {
  const [repo, setRepo] = useState([]);

  useEffect(async () => {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:judmontoyaso+sort:author-date-asc`
    );

    let repos = res.data.items.sort((a, b) => -(a.id - b.id));
    // for (let i = 0; i < 9; i++) {
    //   let re = res.data.items[i].id;

    //   console.log(re);
    // }

    setRepo(repos);
  }, []);

  if (typeof repo === undefined) {
    return "....";
  }
  console.log(repo);

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
