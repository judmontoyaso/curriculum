import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogPost from '../../../components/BlogPost';
import ReadingProgress from '../../../components/ReadingProgress';

const components = {
  BlogPost,
};

export default function Post({ source, frontMatter }) {
  return (
    <article className="relative min-h-screen bg-white dark:bg-gray-900">
      <ReadingProgress />
      <div className="max-w-4xl mx-auto px-4 pt-20">
        <MDXRemote {...source} components={components} />
      </div>
    </article>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Get local post
  const postsDirectory = path.join(process.cwd(), "pages/blog/posts");
  const fullPath = path.join(postsDirectory, slug + ".mdx");

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const mdxSource = await serialize(content);

    return {
      props: {
        source: mdxSource,
        frontMatter: data
      }
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return {
      notFound: true
    };
  }
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "pages/blog/posts");
  
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const paths = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => ({
        params: {
          slug: fileName.replace(/\.mdx$/, '')
        }
      }));

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.error('Error reading blog posts directory:', error);
    return {
      paths: [],
      fallback: false
    };
  }
}