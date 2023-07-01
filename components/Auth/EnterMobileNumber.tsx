import { InputGroup, InputLeftAddon, Input } from "../../app/lib/chakraui";
import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { sendOtp } from "@/functions/auth/sendOtp";

const EnterMobileNumber = ({ setIsOtpPage, setVerificationData, mobileNumber, setMobileNumber }: any) => {

  const handleGetOtp = async () => {
    try {
      if (mobileNumber) {
        const responseData = await sendOtp(mobileNumber)
        console.log(responseData);

        setVerificationData({
          VerificationResponse: responseData?.verificationResponse,
          ServiceResponseParam: responseData?.serviceResponseParam
        })
      }
      setIsOtpPage(true)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-blueDeep font-semibold mb-2">
        Register or Sign In
      </h1>
      <p className="text-sm font-light text-[#00184485] mb-4">
        An OTP will be sent to your mobile number for verification
      </p>
      <InputGroup marginBottom={"10px"}>
        <InputLeftAddon
          pointerEvents="none"
          children={<BsTelephone className="mt-4 mb-4" size={20} />}
        />
        <Input
          type="number"
          backgroundColor={"#FBFAFF"}
          focusBorderColor="#1A75FF"
          placeholder="Enter your Phone Number"
          size={"md"}
          fontSize="base"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </InputGroup>
      <button
        className="btn-primary w-full rounded-md mb-8"
        disabled={mobileNumber?.length != 10}
        onClick={handleGetOtp}
      >
        Get Otp
      </button>
      <p className="text-sm font-light text-[#00184485] mb-4">
        By Sign In/Registration, I agree to the Terms of Service and Privacy
        Policy
      </p>
    </div>
  );
};

export default EnterMobileNumber;
