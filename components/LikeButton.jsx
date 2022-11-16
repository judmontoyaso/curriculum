import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const LikeButton = () => {
  const [like, setLike] = useState();
  useEffect(() => {
    async function getServerSideProps(context) {
      let res = await fetch("http://localhost:3000/api/likes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let likes = await res.json();
      setLike(likes);
    }
    getServerSideProps();
  });

  console.log(like);
  // When mounted on client, now we can show the UI
  const likeSum = () => {
    setLike(like + 1);
  };

  return (
    <div className="">
      <button
        aria-label="Toggle"
        type="button"
        FontAwesomeIcon
        className="pr-1 pl-1 ml-1 mr-1"
        onClick={likeSum}
      >
        <FontAwesomeIcon
          icon={faThumbsUp}
          size="2x"
          className="text-blue-500 ml-4 mr-3"
        />
      </button>
      <span className="text-3xl mr-5">{like}</span>
    </div>
  );
};

export default LikeButton;
