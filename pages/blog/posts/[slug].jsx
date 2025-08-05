import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import BlogPost from "../../../components/BlogPost";
import { useRouter } from "next/router";

// MDX components
const components = {
  BlogPost,
  // Add any custom components you want to use in MDX here
};

export default function Post({ source, frontMatter }) {
  const router = useRouter();

  // Show loading state if page is not yet generated
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-10">
      <MDXRemote {...source} components={components} />
    </div>
  );
}

export async function getStaticPaths() {
  // Get local post paths
  const postsDirectory = path.join(process.cwd(), "pages/blog/posts");
  const filenames = fs.readdirSync(postsDirectory);
  
  const paths = filenames
    .filter(filename => filename.endsWith(".mdx") && filename !== "template.mdx")
    .map(filename => ({
      params: {
        slug: filename.replace(/\.mdx$/, ""),
      },
    }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Get local post
  const postsDirectory = path.join(process.cwd(), "pages/blog/posts");
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    const mdxSource = await serialize(content, {
      scope: data,
    });

    return {
      props: {
        source: mdxSource,
        frontMatter: data,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}