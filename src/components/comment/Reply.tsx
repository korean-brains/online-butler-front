const Reply = () => {
  return (
    <div className="flex">
      <img
        src="/images/default-profile.png"
        className="aspect-square h-8 rounded-full object-cover"
      />
      <div className="ms-2 flex flex-col text-xs">
        <div>
          <span className="me-1 font-semibold">홍길동</span>
          <span className="me-1 text-indigo-800">@홍길동</span>
          ㅇㄴㅇㅁ라ㅓㄴㅁ유히ㅏㅓ뉴이ㅏ허ㅠㄴㅁ이ㅏ허ㅠㄴ마ㅣ어휴ㅑㅣ열퓽미러ㅠ
        </div>
        <div className="mt-1 flex gap-2 text-gray-500">
          <span>1시간 전</span>
          <button className="font-semibold">답글 달기</button>
        </div>
      </div>
    </div>
  );
};

export default Reply;
