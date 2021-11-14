import Link from "next/link";
import Image from "next/image";
import {
  faArrowAltCircleDown,
  faArrowRight,
  faBook,
  faBookOpen,
  faBookReader,
  faComment,
  faCommentsDollar,
  faCommentSlash,
  faHeart,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faComments } from "@fortawesome/free-regular-svg-icons";

export default function BlogCard({
  img,
  createdAt,
  title,
  desc,
  slug,
  likes,
  comments,
  tagList,
}) {
  const date = new Date(createdAt);
  const formatedDate = `${date.getDate()}/${
    parseInt(date.getMonth(), 10) + 1
  }/${date.getFullYear()}`;

  return (
    <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
      <article className="rounded-2xl shadow-xl p-3 dark:shadow-xl bg-gray-200 bg-opacity-90 dark:bg-gray-800 text-justify hover:scale-105 ease-in-out hover:-translate-y-1 duration-700">
        <div className="p-6 flex-1">
          <div className="border-l-4 border-green-400 pl-3 dark:border-indigo-400 transition-colors duration-1000">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
              {formatedDate}
            </h2>
            <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
              {title}
            </h1>
            <p className="leading-relaxed mb-2 text-gray-600 dark:text-gray-400">
              {desc}
            </p>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tagList.map((tag, id) => (
            <span
              key={id}
              className=" py-1  rounded-xl bg-gray-300 px-3 dark:bg-gray-500 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center flex-wrap px-6 py-4">
          <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0  cursor-pointer">
            Continua leyendo
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-blue-500 w-4 h-4 ml-2"
            />
          </a>
          <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-red-500 w-4 h-4 mr-1"
            />
            {likes}
          </span>
          <span className="text-gray-600 inline-flex items-center leading-none text-sm">
            <FontAwesomeIcon
              icon={faComment}
              className="text-gray-500 mr-1 h-4 w-4"
            />
            {comments}
          </span>
        </div>
      </article>
    </Link>
  );
}
