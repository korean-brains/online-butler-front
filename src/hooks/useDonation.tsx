import { useState } from "react";
import { DonationRequest } from "../types/Donation";
import butlerApi from "../api/axiosInstance";

const useDonation = () => {
  const [param, setParam] = useState<DonationRequest>({
    memberId: 0,
    amount: 0,
    message: "",
  });

  const submit = async () => {
    await butlerApi.post("/donation", { param });
  };

  return { param, setParam, submit };
};

export default useDonation;
