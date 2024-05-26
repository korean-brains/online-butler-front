import useFetchSettlementMonthly from '../../hooks/useFetchSettlementMonthly';

const SettlementMonthly = () => {
  const { data } = useFetchSettlementMonthly();

  return (
    <div className="flex flex-col p-3">
      <span className="text-sm">이번달 후원금</span>
      <span className="text-[2rem] font-bold">
        {data?.amount.toLocaleString()}원
      </span>
    </div>
  );
};

export default SettlementMonthly;
