import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";



export async function getServerSideProps(context) {
  let res = await fetch("https://judmontoyaso-effective-fortnight-v5jxpp74x7qhpqgr-3000.preview.app.github.dev/api/likes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let likes = await res.json();
  return {
  likes ,
  };

}

  export default function LikeButton (likes) {

    console.log(likes)
    const [like, setLike] = useState();
  
    // When mounted on client, now we can show the UI
    const likeSum = () =>{
        setLike(like + 1)
    }
  
    return (
      <div>
          <button onClick={likeSum}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                size="3x"
                className="text-blue-500 ml-4"
              />
  
          </button>
         
<div>
    {like}
</div>
      </div>
        
    );
  };
  

  