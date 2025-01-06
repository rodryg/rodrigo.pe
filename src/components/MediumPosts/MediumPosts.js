import React, { useEffect, useState } from 'react';

const MediumPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rodryg');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const posts = data.items.slice(0, 2).map(item => ({
          title: item.title,
          link: item.link,
          thumbnail: item.thumbnail
        }));
        setPosts(posts); // Obtener los 2 últimos posts
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Últimos posts en Medium</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <img src={post.thumbnail} alt={post.title} />
            <p>{post.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default MediumPosts;