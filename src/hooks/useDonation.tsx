import { useContext, useState } from 'react';
import { DonationRequest } from '../types/Donation';
import butlerApi from '../api/axiosInstance';
import { Bootpay } from '@bootpay/client-js';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const useDonation = () => {
  const { authentication } = useContext(AuthenticationContext);
  const [param, setParam] = useState<DonationRequest>({
    receiverId: 0,
    amount: 0,
    message: '',
  });

  const submit = async () => {
    const response = await Bootpay.requestPayment({
      application_id: `${process.env.REACT_APP_BOOTPAY_ID}`,
      price: param.amount,
      order_name: '테스트결제',
      order_id: 'TEST_ORDER_ID',
      tax_free: 0,
      user: {
        id: `${authentication.id}`,
        username: '회원이름',
        phone: '01000000000',
        email: 'test@test.com',
      },
      items: [
        {
          id: 'item_id',
          name: '테스트아이템',
          qty: 1,
          price: param.amount,
        },
      ],
      extra: {
        open_type: 'iframe',
        card_quota: '0,2,3',
        escrow: false,
      },
    });

    switch (response.event) {
      case 'issued': // 가상계좌 입금 완료 처리
        break;
      case 'done': // 결제 완료 처리
        await butlerApi.post(
          '/api/donation/verify',
          {
            receiptId: response.data.receipt_id,
            giverId: authentication.id,
            receiverId: param.receiverId,
            message: param.message,
          },
          {
            headers: {
              Authorization: `Bearer ${authentication.accessToken}`,
            },
          },
        );
        break;
      case 'confirm': //payload.extra.separately_confirmed = true; 일 경우 승인 전 해당 이벤트가 호출됨
        break;
    }
  };

  return { param, setParam, submit };
};

export default useDonation;
