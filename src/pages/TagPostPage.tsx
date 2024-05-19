import HeaderBack from '../components/header/HeaderBack';
import { useParams } from 'react-router-dom';
import useFetchTagPosts from '../hooks/useFetchTagPosts';
import useIntersect from '../hooks/useIntersect';
import { useMemo } from 'react';
import Post from '../components/post/Post';

const TagPostPage = () => {
  const params = useParams();
  const tag = params.tag!;
  const { data, isFetching, hasNextPage, fetchNextPage } = useFetchTagPosts({
    tagName: tag,
    size: 10,
  });

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const posts = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.content) : []),
    [data],
  );

  return (
    <>
      <HeaderBack title={`#${tag}`} />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      <div ref={ref} className="h-5"></div>
      {isFetching && (
        <img alt="loading" src="/images/spinner.gif" className="mx-auto" />
      )}
    </>
  );
};

export default TagPostPage;
