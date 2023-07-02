import { baseUrl } from "@/baseUrl";
import axios from "axios";

export async function verifyOtp(mobileNumber: string, otp: string, VerificationResponse: string, ServiceResponseParam: string) {
    try {
        const res = await axios.post(`${baseUrl}/api/verifyOtp`, {
            phone: `+91${mobileNumber}`,
            otp: otp,
            VerificationResponse,
            ServiceResponseParam
        });

        if (res.data.jwtToken) {
            window.sessionStorage.setItem("jwtToken", res.data.jwtToken)
        }
        
        return (res.data.message === "Otp verified successfully")

    } catch (err) {
        console.log(err);
    }
}