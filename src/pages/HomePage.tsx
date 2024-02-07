import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Post from "../components/post/Post";
import getPost from "../api/post/getPost";
import PostType from "../types/Post";

const HomePage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getPost().then((posts) => setPosts((prev) => [...prev, ...posts]));
  }, []);

  return (
    <>
      <Header onClick={() => {}} />
      <div className="overflow-hidden">
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
