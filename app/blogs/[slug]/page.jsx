import { getAllBlogs, getBlogBySlug } from "@/app/lib/getBlogs";
import BlogClientPage from "@/app/blogs/[slug]/BlogClientPage";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.fields.slug }));
}

export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug);
  const { metatitle, metadescription } = blog.fields;
  return {
    title: `${metatitle}`,
    description: `${metadescription}`,
    alternates: {
      canonical: `https://logisol.tech/blogs/${params.slug}`,
    },
  };
}

export default async function BlogPage({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return <BlogClientPage blog={blog} />;
}
