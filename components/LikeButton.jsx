import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const LikeButton = () => {
  const [like, setLike] = useState(0);

  // When mounted on client, now we can show the UI

  const likeSume = () => {
    setLike(like + 1), [like];
  };

  return (
    <div className="">
      <button
        aria-label="Toggle"
        type="button"
        FontAwesomeIcon
        className="pr-1 pl-1 ml-1 mr-1"
        onClick={likeSume}
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
