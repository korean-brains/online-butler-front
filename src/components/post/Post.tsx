import PostType from "../../types/Post";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MediaContent from "./MediaContent";
import {
  faComment,
  faHeart,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  return (
    <section className="flex flex-col pt-5">
      <div className="flex items-center px-4">
        <img
          className="aspect-square h-10 rounded-full object-cover"
          src={post.member.profile || "/images/profile.jpg"}
          alt="profile"
        />
        <div className="ms-2 flex flex-col">
          <span>{post.member.nickname}</span>
          <span className="text-sm text-gray-500">
            {post.post.published.toLocaleString("ko-KR", { timeZone: "UTC" })}
          </span>
        </div>
        <button className="ms-auto rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold">
          {post.member.followed ? "팔로잉" : "팔로우"}
        </button>
      </div>
      <p className="mt-3 px-4">{post.post.description}</p>
      <div className="mt-2">
        <Swiper resistance={true}>
          {post.post.media.map((media, i, self) => (
            <SwiperSlide key={i} className="relative">
              <MediaContent
                img={media.src}
                current={i + 1}
                total={self.length}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="my-2 flex items-center px-4">
        <button>
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </button>
        <span className="ms-4">{post.post.likeNum}</span>
        <button className="ms-8">
          <FontAwesomeIcon icon={faComment} size="lg" />
        </button>
        <span className="ms-4">{post.post.commentNum}</span>
        <button className="ms-8">
          <FontAwesomeIcon icon={faShareFromSquare} size="lg" />
        </button>
        <button className="ms-auto">
          <FontAwesomeIcon icon={faHandHoldingDollar} size="lg" />
        </button>
      </div>
    </section>
  );
};

export default Post;
