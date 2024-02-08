import { useEffect, useState } from "react";
import { MemberPostItem } from "../../types/Post";
import getMemberPosts from "../../api/post/getMemberPosts";
import { Link } from "react-router-dom";

interface GridPostProps {
  id: number;
}

const GridPost = ({ id }: GridPostProps) => {
  const [tab, setTab] = useState<string>("write");
  const [writePosts, setWritePosts] = useState<MemberPostItem[]>([]);
  const [likePosts, setLikePosts] = useState<MemberPostItem[]>([]);

  const handleWriteTab = () => {
    setTab("write");
  };
  const handleLikeTab = () => {
    setTab("like");
  };

  useEffect(() => {
    if (tab === "write" && writePosts.length === 0) {
      getMemberPosts(id).then((posts) => setWritePosts(posts));
    }
    if (tab === "like" && likePosts.length === 0) {
      getMemberPosts(id).then((posts) => setLikePosts(posts));
    }
  }, [id, tab, writePosts, likePosts]);

  return (
    <div>
      <div className="sticky top-0 z-10 flex h-10 bg-white">
        <button
          className={`flex-grow ${tab === "write" ? "border-b-2 border-gray-950" : ""}`}
          onClick={handleWriteTab}
        >
          작성글
        </button>
        <button
          className={`flex-grow ${tab === "like" ? "border-b-2 border-gray-950" : ""}`}
          onClick={handleLikeTab}
        >
          좋아요한 글
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1 p-1">
        {tab === "write" &&
          writePosts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id}>
              <img
                src={post.thumbnail}
                alt="thumbnail"
                className="aspect-square object-cover"
              />
            </Link>
          ))}

        {tab === "like" &&
          likePosts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id}>
              <img
                src={post.thumbnail}
                alt="thumbnail"
                className="aspect-square object-cover"
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default GridPost;
