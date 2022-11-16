import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const LikeButton = () => {
  const [like, setLike] = useState();
  const [sumLike, setSumLike] = useState();

  async function getServerSideProps(context) {
    let res = await fetch("https://www.juandeveloper.ninja/api/likes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let likes = await res.json();
    likes = likes[0].likes;
    console.log(likes);
    setLike(likes);
  }
  getServerSideProps();

  async function getServerSidePropss(context) {
    let resp = await fetch("https://www.juandeveloper.ninja/api/likes", {
      method: "POST",
      body: JSON.parse(context),
    });
    resp = await resp.json();
  }

  // When mount ed on client, now we can show the UI
  const likeSum = () => {
    getServerSidePropss(like + 1);
    getServerSideProps();
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
