import Header from "../components/header/Header";
import PostList from "../components/post/PostList";

const HomePage = () => {
  return (
    <>
      <Header onClick={() => {}} />
      <PostList />
      {/* <div className="overflow-hidden">
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div> */}
    </>
  );
};

export default HomePage;
