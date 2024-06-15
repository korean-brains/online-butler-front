import { useContext, useEffect, useState } from 'react';
import { DonationRequest } from '../types/Donation';
import butlerApi from '../api/axiosInstance';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import uuid from 'react-uuid';

declare global {
  interface Window {
    PortOne?: any;
  }
}

const useDonation = () => {
  const { authentication } = useContext(AuthenticationContext);
  const [param, setParam] = useState<DonationRequest>({
    receiverId: 0,
    amount: 0,
    message: '',
  });

  useEffect(() => {
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.portone.io/v2/browser-sdk.js';
    document.head.appendChild(iamport);

    return () => {
      document.head.removeChild(iamport);
    };
  }, []);

  const submit = async () => {
    const { PortOne } = window;

    const response = await PortOne.requestPayment({
      storeId: `${process.env.REACT_APP_IAMPORT_STORE_KEY}`,
      channelKey: `${process.env.REACT_APP_IAMPORT_CHANNEL_KEY}`,
      paymentId: `payment-${uuid()}`,
      orderName: '테스트 결제',
      totalAmount: param.amount,
      currency: 'CURRENCY_KRW',
      payMethod: 'EASY_PAY',
    });

    if (response.code) throw new Error(response.message);

    await butlerApi.post('/api/donation/verify', {
      paymentId: response.paymentId,
      amount: param.amount,
      giverId: authentication.id,
      receiverId: param.receiverId,
      message: param.message,
    });
  };

  return { param, setParam, submit };
};

export default useDonation;
