import { BlogPost } from '../components/blogPost';

const blogPosts = [
  {
    title: "Getting Started with Next.js and React",
    excerpt: "Learn how to build modern web applications with Next.js and React. This guide covers the basics and best practices for beginners.",
    date: "2023-05-15",
    readTime: "5 min read",
    slug: "getting-started-nextjs-react"
  },
  {
    title: "Advanced TypeScript Techniques for React Developers",
    excerpt: "Dive deep into TypeScript and learn advanced techniques to improve your React applications. Covers generics, mapped types, and more.",
    date: "2023-06-02",
    readTime: "8 min read",
    slug: "advanced-typescript-react"
  },
  {
    title: "Building Scalable APIs with Go",
    excerpt: "Explore the world of Go and learn how to build high-performance, scalable APIs. This post covers routing, middleware, and database integration.",
    date: "2023-06-20",
    readTime: "10 min read",
    slug: "scalable-apis-go"
  },
  {
    title: "Getting Started with Next.js and React",
    excerpt: "Learn how to build modern web applications with Next.js and React. This guide covers the basics and best practices for beginners.",
    date: "2023-05-15",
    readTime: "5 min read",
    slug: "getting-started-nextjs-react"
  },
  {
    title: "Building Scalable APIs with Go",
    excerpt: "Explore the world of Go and learn how to build high-performance, scalable APIs. This post covers routing, middleware, and database integration.",
    date: "2023-06-20",
    readTime: "10 min read",
    slug: "scalable-apis-go"
  },
  {
    title: "Advanced TypeScript Techniques for React Developers",
    excerpt: "Dive deep into TypeScript and learn advanced techniques to improve your React applications. Covers generics, mapped types, and more.",
    date: "2023-06-02",
    readTime: "8 min read",
    slug: "advanced-typescript-react"
  }  
];

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="w-full max-w-4xl px-4 py-8">
        <h1 className="text-4xl font-bold text-zinc-100 mb-8 text-center">Blog</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPost
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

