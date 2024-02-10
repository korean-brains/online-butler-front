import { useMemo } from "react";
import useFetchPosts from "../../hooks/useFetchPosts";
import useIntersect from "../../hooks/useIntersect";
import Post from "./Post";

const PostList = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchPosts();

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const items = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.contents) : []),
    [data],
  );

  return (
    <div>
      {items.map((item, i) => (
        <Post key={i} post={item} />
      ))}
      <div ref={ref} className="h-1"></div>
    </div>
  );
};

export default PostList;
