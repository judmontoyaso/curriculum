import { useRouter } from "next/router";
import Link from "next/link";

export default function ActiveLink({ children, href }) {
  const router = useRouter();
  const color = router.pathname === href ? "lg:mr-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold items-center justify-center dark:text-blue-300 dark:border-blue-400  border-b-2 text-green-400 border-green-500 dark:text-white  lg:mt-0 mt-4"  : "lg:mr-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold items-center justify-center dark:hover:text-blue-300 dark:hover:border-blue-400  hover:border-b-2 hover:text-green-400 hover:border-green-500 dark:text-white  lg:mt-0 mt-4";

  const handleClick = (e) => {
    console.log(href);
    console.log(router.pathname);
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href}>
      <a
        onClick={handleClick}
        className={color}
      >
        {children}
      </a>
    </Link>
  );
}
