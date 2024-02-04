interface MediaContentProps {
  img: string;
  current: number;
  total: number;
}

const MediaContent = ({ img, current, total }: MediaContentProps) => {
  return (
    <>
      <img
        src={img}
        alt="content"
        className="aspect-square w-full object-cover"
      />
      <span className="absolute right-3 top-2 rounded-full bg-black bg-opacity-50 px-3 py-1 text-xs text-white">
        {current}/{total}
      </span>
    </>
  );
};

export default MediaContent;
