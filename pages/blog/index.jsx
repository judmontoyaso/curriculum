import BlogCard from "../../components/BlogCard";

export default function Blog({ devDotToPosts }) {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold text-gray-900 lg:text-3xl dark:text-white mt-10 mb-10">
        Posts
      </h1>
      <div className="lg:mr-28 lg:ml-28 text-justify lg:mt-10 lg:mb-14 mt-10 mb-14 mr-10 ml-10">
        <span className="font-semibold text-gray-600 dark:text-gray-400 text-lg">
          <p>
           Si quieres saber como construí mi sitio web y contruir el tuyo, acá puedes ver algunos posts que he escrito en dev.to y que utilice para diseñar este sitio.
          </p>{" "}
        Solo tienes que dar click en la tarjeta!
        </span>

        <hr className="mt-8  border-gray-300 dark:border-gray-700" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:mt-10 gap-y-20">
        {devDotToPosts.map(
          ({
            id,
            type_of,
            comments_count,
            published_at,
            description,
            title,
            tag_list,
            social_image,
            positive_reactions_count,
            slug,
          }) => {
            return (
              type_of === "article" && (
                <BlogCard
                  key={id}
                  id={id}
                  img={social_image}
                  createdAt={published_at}
                  title={title}
                  desc={description}
                  slug={slug}
                  likes={positive_reactions_count}
                  comments={comments_count}
                  tagList={tag_list}
                />
              )
            );
          }
        )}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const devDotToPosts = await fetch(
    `https://dev.to/api/articles?username=juanmontoya`
  );

  const res = await devDotToPosts.json();
  if (typeof res === undefined) {
    return "....";
  }

  return {
    props: {
      devDotToPosts: res,
    },
  };
};
