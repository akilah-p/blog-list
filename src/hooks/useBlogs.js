import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/getBlogs'; 
 
export function useBlogs() {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchBlogs();
      setBlogs(resp);
    };
    fetchData();
  }, []);

  return blogs;
}