import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const LikeButton = () => {
  const [like, setLike] = useState();
  const [color, setColor] = useState("text-gray-500");
  const [textColor, setTextColor] = useState("text-gray-900");
  const [activeButton, setActiveButton] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");
  const [buttonEffect, setButtonEffect] = useState("btn-5");
  const [loading, setLoading] = useState(true);

  async function getServerSideProps(context) {
    let res = await fetch("/api/likes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let likes = await res.json();
    likes = likes[0].likes;
    console.log(likes);
    setLoading(false);
    setLike(likes);
  }
  getServerSideProps();

  async function getServerSidePropss(context) {
    let resp = await fetch("/api/likes", {
      method: "POST",
      body: JSON.parse(context),
    });
    resp = await resp.json();
  }

  // When mount ed on client, now we can show the UI
  const likeSum = () => {
    getServerSidePropss(like + 1);
    setColor("text-white");
    setBgColor("bg-blue-900");
    setTextColor("text-white");
    setActiveButton(true);
    setButtonEffect("");
    getServerSideProps();
    console.log(color);
  };

  return (
    <div
      className={`${buttonEffect} transition-none p-1 flex flex-row items-center mr-4 mt-0.5  border button-like    border-gray-300 rounded-lg ${bgColor} ${
        activeButton ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <button
        aria-label="Toggle"
        type="button"
        FontAwesomeIcon
        className={` pr-1 pl-1   ${
          activeButton ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={likeSum}
        disabled={activeButton}
      >
        <FontAwesomeIcon
          icon={faThumbsUp}
          size=""
          className={`mr-1  ${color} ${activeButton ? "" : "icono"}`}
        />
        <span className={`text-sm ml-1 !transition-none  ${textColor}`}>
          {loading ? (
            <svg
              className={`animate-spin  ml-2 inline-block h-4 w-4 text-gray-400
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            like
          )}
        </span>
      </button>
    </div>
  );
};

export default LikeButton;
