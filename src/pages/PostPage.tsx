import { useParams } from 'react-router';
import HeaderBack from '../components/header/HeaderBack';
import Post from '../components/post/Post';
import useFetchPost from '../hooks/useFetchPost';

const PostPage = () => {
  const { id } = useParams();
  const { isLoading, data, refetch } = useFetchPost(parseInt(id!));

  return (
    <>
      <HeaderBack title="게시글" />
      {!isLoading && <Post post={data!} refetch={refetch} />}
    </>
  );
};

export default PostPage;
