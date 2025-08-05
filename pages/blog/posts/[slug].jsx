import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import BlogPost from "../../../components/BlogPost";
import { useRouter } from "next/router";

// Definimos los componentes que estarán disponibles en MDX
const components = {
  BlogPost,
  // Puedes agregar más componentes aquí si los necesitas
};

export default function Post({ source, frontMatter }) {
  const router = useRouter();

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
  const postsDirectory = path.join(process.cwd(), "pages/blog/posts");
  const filenames = fs.readdirSync(postsDirectory);
  
  const paths = filenames
    .filter(filename => filename.endsWith(".mdx") && filename !== "template.mdx" && filename !== "[slug].jsx")
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
  try {
    const { slug } = params;
    const postsDirectory = path.join(process.cwd(), "pages/blog/posts");
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return {
        notFound: true,
      };
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    
    const mdxSource = await serialize(content, {
      scope: data,
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
      },
    });

    return {
      props: {
        source: mdxSource,
        frontMatter: data,
      },
    };
  } catch (err) {
    console.error("Error loading blog post:", err);
    return {
      notFound: true,
    };
  }
}