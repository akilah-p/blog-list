import './Main.css';
import BlogCard from '../BlogCard/BlogCard';

import { useBlogs } from '../../hooks/useBlogs';

export default function Main() {
  const blogs = useBlogs();

  return (
    <main> 
      {blogs.map((blog) => (
        <BlogCard key={blog.title} {...blog} />
      ))}
    </main>
  );
}