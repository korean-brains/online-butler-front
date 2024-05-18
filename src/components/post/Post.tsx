import { Post as PostType } from '../../types/Post';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MediaContent from './MediaContent';
import {
  faComment,
  faHeart,
  faShareFromSquare,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingDollar,
  faHeart as faHeartSolid,
} from '@fortawesome/free-solid-svg-icons';
import timeForToday from '../../utils/timeForToday';
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { SHARE_HOST } from '../../constants/share';
import serverUrl from '../../utils/serverUrl';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import Modal from '../modal/Modal';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import useDeletePost from '../../hooks/useDeletePost';
import useFollow from '../../hooks/useFollow';
import CommentList from '../comment/CommentList';
import useLike from '../../hooks/useLike';

interface PostProps {
  post: PostType;
  refetch: any;
}

const Post = ({ post, refetch }: PostProps) => {
  const { authentication } = useContext(AuthenticationContext);
  const [showMore, setShowMore] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState<boolean>(false);
  const { submit } = useDeletePost(post.id);
  const { follow, unFollow } = useFollow(post.writer.id);
  const { like, disLike } = useLike();

  const handleShare = () => {
    if (!navigator.canShare) {
      alert('공유하기 기능을 사용할 수 없습니다.');
      return;
    }
    navigator.share({
      title: '온라인 집사',
      text: post.caption,
      url: `${SHARE_HOST}/post/${post.id}`,
    });
  };

  const handleDonation = () => {
    navigate(`/donation/${post.id}`);
  };

  const deletePost = async () => {
    await submit();
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <>
      <article className="flex flex-col pt-5">
        {/* 게시글 Header */}
        <div className="flex items-center px-4">
          <img
            className="aspect-square h-10 rounded-full object-cover"
            src={
              (post.writer.profile && serverUrl(post.writer.profile)) ||
              '/images/default-profile.png'
            }
            alt="profile"
          />
          <div className="ms-2 flex flex-col">
            <Link to={`/member/${post.writer.id}/profile`}>
              <span>{post.writer.name}</span>
            </Link>
            <span className="text-sm text-gray-500">
              {timeForToday(post.createdAt)}
            </span>
          </div>

          {post.writer.followed && (
            <button
              className="ms-auto rounded-md bg-gray-100 px-3 py-1 text-sm"
              onClick={async () => {
                await unFollow();
                refetch();
              }}
            >
              팔로잉
            </button>
          )}
          {!post.writer.followed && (
            <button
              className="ms-auto rounded-md bg-indigo-400 px-3 py-1 text-sm text-white"
              onClick={async () => {
                await follow();
                refetch();
              }}
            >
              팔로우
            </button>
          )}
          {authentication.id === post.writer.id && (
            <button className="ps-3" onClick={() => setIsModalOpen(true)}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          )}
        </div>

        <div className="px-4">
          {/* 게시글 내용 */}
          <p
            className={`mt-3 text-sm ${showMore ? '' : 'line-clamp-2 text-clip'}`}
          >
            {post.caption}
          </p>

          {/* 태그 */}
          {showMore && (
            <div className="mt-3 flex flex-wrap">
              {post.tags.map((tag, idx) => (
                <Link to={`/search?keyword=#${tag}`}>
                  <span key={idx} className="me-1 text-sm text-link">
                    {`#${tag}`}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* 더보기 */}
          {!showMore && (
            <button onClick={() => setShowMore(true)} className="text-gray-500">
              더 보기
            </button>
          )}
        </div>
        {/* 이미지 슬라이드 */}
        <div className="mt-2">
          <Swiper resistance={true}>
            {post.images.map((image, i, self) => (
              <SwiperSlide key={i} className="relative">
                <MediaContent
                  img={serverUrl(image)}
                  current={i + 1}
                  total={self.length}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 아이콘 */}
        <div className="my-2 flex items-center px-4">
          {post.liked && (
            <button onClick={() => disLike({ postId: post.id })}>
              <FontAwesomeIcon
                icon={faHeartSolid}
                size="lg"
                className="text-red-400"
              />
            </button>
          )}

          {!post.liked && (
            <button onClick={() => like({ postId: post.id })}>
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </button>
          )}
          <span className="ms-4">{post.likeCount}</span>
          <button className="ms-8" onClick={() => setIsCommentModalOpen(true)}>
            <FontAwesomeIcon icon={faComment} size="lg" />
          </button>
          <span className="ms-4">{post.commentCount}</span>
          <button className="ms-8" onClick={handleShare}>
            <FontAwesomeIcon icon={faShareFromSquare} size="lg" />
          </button>
          <button className="ms-auto" onClick={handleDonation}>
            <FontAwesomeIcon icon={faHandHoldingDollar} size="lg" />
          </button>
        </div>
      </article>

      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)}>
          <div className="flex min-w-[300px] flex-col gap-5">
            <Link to={`/post/${post.id}/update`}>
              <FontAwesomeIcon icon={faPencil} className="w-[24px]" />
              <span className="ms-3">게시글 수정</span>
            </Link>
            <button
              className="flex items-center justify-items-start text-red-500"
              onClick={deletePost}
            >
              <FontAwesomeIcon icon={faTrash} className="w-[24px]" />
              <span className="ms-3">게시글 삭제</span>
            </button>
          </div>
        </Modal>
      )}
      {isCommentModalOpen && (
        <Modal closeModal={() => setIsCommentModalOpen(false)} title="댓글">
          <CommentList postId={post.id} />
        </Modal>
      )}
    </>
  );
};

export default Post;
