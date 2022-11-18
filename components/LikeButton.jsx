import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";


const LikeButton = () => {
  const [like, setLike] = useState();
  const [color, setColor] = useState('text-gray-500');
  const [textColor, setTextColor] = useState('text-gray-900');
  const [activeButton, setActiveButton] = useState(false);
  const [bgColor, setBgColor] = useState('bg-white');
  const [buttonEffect, setButtonEffect] = useState('btn-5');



  const [sumLike, setSumLike] = useState();

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
    setColor('text-white')
    setBgColor('bg-blue-900')
    setTextColor('text-white')
    setActiveButton(true)
    setButtonEffect("")
    getServerSideProps();
    console.log(color)
  };

 

  return (
    <div className={`${buttonEffect} transition-none p-1 flex flex-row items-center mr-4 mt-0.5  border    border-gray-300 rounded-lg ${bgColor} ${activeButton ? 'cursor-default' : 'cursor-pointer'}`}>
      <button
        aria-label="Toggle"
        type="button"
        FontAwesomeIcon
        className={` pr-1 pl-1  mr-1 ${activeButton ? 'cursor-default' : 'cursor-pointer'}`}
        onClick={likeSum}
        disabled = {activeButton}
      >
        <FontAwesomeIcon
          icon={faThumbsUp}
          size=""
          className={`mr-1  ${color} ${activeButton ? '' : 'hover:text-blue-900'}`}
        />
      </button>
      <span className={`text-sm mr-1 !transition-none  ${textColor}`}>{like}</span>
    </div>
  );
};

export default LikeButton;
