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
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import timeForToday from '../../utils/timeForToday';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SHARE_HOST } from '../../constants/share';

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const navigate = useNavigate();

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

  return (
    <article className="flex flex-col pt-5">
      {/* 게시글 Header */}
      <div className="flex items-center px-4">
        <img
          className="aspect-square h-10 rounded-full object-cover"
          src={post.writer.profile || '/images/profile.jpg'}
          alt="profile"
        />
        <div className="ms-2 flex flex-col">
          <span>{post.writer.name}</span>
          <span className="text-sm text-gray-500">
            {timeForToday(post.createdAt)}
          </span>
        </div>
        <button className="ms-auto rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold">
          {post.writer.followed ? '팔로잉' : '팔로우'}
        </button>
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
            {post.tags.map((idx, tag) => (
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
              <MediaContent img={image} current={i + 1} total={self.length} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 아이콘 */}
      <div className="my-2 flex items-center px-4">
        <button>
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </button>
        <span className="ms-4">{post.likeCount}</span>
        <button className="ms-8">
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
  );
};

export default Post;
