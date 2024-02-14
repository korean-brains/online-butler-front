import { useContext, useEffect, useState } from "react";
import DonationList from "../components/donation/DonationList";
import HeaderBack from "../components/header/HeaderBack";
import RankingList from "../components/donation/RankingList";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";

const DonationListPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<string>("sent");
  const { authentication } = useContext(AuthenticationContext);

  useEffect(() => {
    if (!authentication) {
      navigate("/login", { replace: true });
    }
  }, [authentication, navigate]);

  return (
    <>
      <HeaderBack title="후원내역" />
      <div className="flex border-b border-gray-200">
        <button
          className={`grow  py-3 ${tab === "sent" && "border-b-2 border-black"}`}
          onClick={() => setTab("sent")}
        >
          후원 한 내역
        </button>
        <button
          className={`grow py-3 ${tab === "ranking" && "border-b-2 border-black"}`}
          onClick={() => setTab("ranking")}
        >
          후원 랭킹
        </button>
        <button
          className={`grow py-3 ${tab === "received" && "border-b-2 border-black"}`}
          onClick={() => setTab("received")}
        >
          후원 받은 내역
        </button>
      </div>
      {tab === "sent" && <DonationList type="sent" />}
      {tab === "ranking" && <RankingList />}
      {tab === "received" && <DonationList type="received" />}
    </>
  );
};

export default DonationListPage;
