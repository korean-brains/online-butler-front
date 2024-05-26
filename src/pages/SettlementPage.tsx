import HeaderBack from '../components/header/HeaderBack';
import SettlementList from '../components/settlement/SettlementList';
import SettlementMonthly from '../components/settlement/SettlementMonthly';

const SettlementPage = () => {
  return (
    <>
      <HeaderBack title="정산 내역" />
      <SettlementMonthly />
      <SettlementList />
    </>
  );
};

export default SettlementPage;
