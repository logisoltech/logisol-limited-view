// Cache management utilities for blogs

export const clearBlogCache = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem("logisol_blogs");
    console.log("Blog cache cleared");
  }
};

export const getCachedBlogs = () => {
  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem("logisol_blogs");
    return cached ? JSON.parse(cached) : null;
  }
  return null;
};

export const setCachedBlogs = (blogs) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("logisol_blogs", JSON.stringify(blogs));
    console.log("Blogs cached:", blogs.length, "items");
  }
}; 