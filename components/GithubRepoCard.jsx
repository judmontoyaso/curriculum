import GithubRepo from "./GithubRepo";

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="rounded-2xl shadow-xl p-6 dark:shadow-xl bg-gray-200 bg-opacity-90 dark:bg-gray-800 text-justify hover:scale-105 ease-in-out hover:-translate-y-1 duration-700">
      <div className="border-l-4 border-green-400 pl-3 dark:border-indigo-400 transition-colors duration-1000">
        <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
          {latestRepo.name}
        </h1>
      </div>
      <p className="text-base font-normal my-4 text-gray-500">
        {latestRepo.description}
      </p>
      <div className="self-end">
        <a
          href={latestRepo.clone_url}
          className="font-semibold group flex flex-row space-x-2 w-full items-center"
        >
          <p> Ver Repositorio </p>
          <div className="transform  group-hover:translate-x-2 transition duration-300">
            &rarr;
          </div>
        </a>
      </div>
    </div>
  );
};

export default GithubRepoCard;
