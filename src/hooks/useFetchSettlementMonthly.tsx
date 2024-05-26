import { useContext } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { useQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { SettlementMonthlyResponse } from '../types/Settlement';

const useFetchSettlementMonthly = () => {
  const { authentication } = useContext(AuthenticationContext);

  return useQuery(['settlement monthly', authentication.id], async () => {
    return (
      await butlerApi.get<SettlementMonthlyResponse>('/api/settlement/monthly')
    ).data;
  });
};

export default useFetchSettlementMonthly;
