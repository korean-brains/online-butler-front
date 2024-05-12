import { useContext, useEffect, useState } from 'react';
import HeaderBack from '../components/header/HeaderBack';
import RankingList from '../components/donation/RankingList';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import DonationGiveList from '../components/donation/DonationGiveList';
import DonationReceiveList from '../components/donation/DonationReceiveList';

const DonationListPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<string>('give');
  const { authentication } = useContext(AuthenticationContext);

  useEffect(() => {
    if (!authentication) {
      navigate('/login', { replace: true });
    }
  }, [authentication, navigate]);

  return (
    <>
      <HeaderBack title="후원내역" />
      <div className="flex border-b border-gray-200">
        <button
          className={`grow  py-3 ${tab === 'give' && 'border-b-2 border-black'}`}
          onClick={() => setTab('give')}
        >
          후원 한 내역
        </button>
        <button
          className={`grow py-3 ${tab === 'ranking' && 'border-b-2 border-black'}`}
          onClick={() => setTab('ranking')}
        >
          후원 랭킹
        </button>
        <button
          className={`grow py-3 ${tab === 'receive' && 'border-b-2 border-black'}`}
          onClick={() => setTab('receive')}
        >
          후원 받은 내역
        </button>
      </div>
      {tab === 'give' && <DonationGiveList />}
      {tab === 'ranking' && <RankingList />}
      {tab === 'receive' && <DonationReceiveList />}
    </>
  );
};

export default DonationListPage;
