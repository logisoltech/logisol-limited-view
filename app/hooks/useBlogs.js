"use client";

import { useState, useEffect, useCallback } from "react";
import { getAllBlogs } from "../lib/getBlogs";
import { getCachedBlogs, setCachedBlogs, clearBlogCache } from "../lib/cacheUtils";

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = useCallback(async (forceRefresh = false) => {
    try {
      setLoading(true);
      
      // Check localStorage first for initial load (unless forcing refresh)
      if (!forceRefresh) {
        const cached = getCachedBlogs();
        if (cached) {
          setBlogs(cached);
          setLoading(false);
        }
      }

      // Always fetch fresh data from Contentful
      const data = await getAllBlogs();
      console.log("Blogs fetched from Contentful:", data);
      
      if (data && data.length > 0) {
        setBlogs(data);
        setCachedBlogs(data);
      } else {
        console.warn("No blogs returned from Contentful");
        if (forceRefresh) {
          setBlogs([]);
        }
      }
      
      setLoading(false);
    } catch (error) {
      console.error("Error in useBlogs hook:", error);
      setLoading(false);
    }
  }, []);

  const refreshBlogs = useCallback(() => {
    clearBlogCache();
    fetchBlogs(true);
  }, [fetchBlogs]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return { blogs, loading, refreshBlogs };
}
