import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(0);
  const [color, setColor] = useState("text-gray-500");
  const [textColor, setTextColor] = useState("text-gray-900");
  const [activeButton, setActiveButton] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");
  const [buttonEffect, setButtonEffect] = useState("btn-5");
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    try {
      const res = await fetch("/api/likes");
      const likes = await res.json();
      setLike(likes[0]?.likes || 0);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching likes:", error);
      setLoading(false);
      setLike(0);
    }
  };

  const updateLikes = async (newLikeCount) => {
    try {
      await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLikeCount),
      });
      await fetchLikes();
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const likeSum = () => {
    updateLikes(like + 1);
    setColor("text-white");
    setBgColor("bg-blue-900");
    setTextColor("text-white");
    setActiveButton(true);
    setButtonEffect("");
  };

  // Don't render anything until after mounting to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="p-1 flex flex-row items-center mr-4 mt-0.5 border border-gray-300 rounded-lg bg-white">
        <button
          aria-label="Loading"
          type="button"
          className="pr-1 pl-1 cursor-default"
          disabled
        >
          <FontAwesomeIcon
            icon={faThumbsUp}
            size="sm"
            className="mr-1 text-gray-500"
          />
          <span className="text-sm ml-1 text-gray-900">
            <svg
              className="animate-spin mb-1 inline-block h-4 w-4 text-gray-400"
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
          </span>
        </button>
      </div>
    );
  }

  return (
    <div
      className={`${buttonEffect} transition-none p-1 flex flex-row items-center mr-4 mt-0.5 border button-like border-gray-300 rounded-lg ${bgColor} ${
        activeButton ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <button
        aria-label="Toggle"
        type="button"
        className={`pr-1 pl-1 ${
          activeButton ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={likeSum}
        disabled={activeButton}
      >
        <FontAwesomeIcon
          icon={faThumbsUp}
          size="sm"
          className={`mr-1 ${color} ${activeButton ? "" : "icono"}`}
        />
        <span className={`text-sm ml-1 !transition-none ${textColor}`}>
          {loading ? (
            <svg
              className="animate-spin mb-1 inline-block h-4 w-4 text-gray-400"
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
