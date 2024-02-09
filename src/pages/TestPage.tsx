import { useState } from "react";
import Modal from "../components/modal/Modal";
import { createPortal } from "react-dom";

const TestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="bg-indigo-200 p-2"
        onClick={() => setIsModalOpen(true)}
      >
        모달창 열려라!
      </button>
      <div className="h-[400px] overflow-y-scroll">
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
        <div>하이하이</div>
      </div>
      {isModalOpen &&
        createPortal(
          <Modal title="모달 제목" closeModal={() => setIsModalOpen(false)}>
            <div>모달 본문</div>
            <div>모달 본문</div>
            <div>모달 본문</div>
            <div>모달 본문</div>
            <div>모달 본문</div>
            <div>모달 본문</div>
            <div>
              모달
              ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ본문
            </div>
          </Modal>,
          document.body,
        )}
    </>
  );
};

export default TestPage;
