import React from 'react';
import useFetch from './Usefetch';

const PostsList = () => {
  const { data, loading, error } = useFetch('https://6620d6b23bf790e070b0df9c.mockapi.io/sampledb/posts');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
