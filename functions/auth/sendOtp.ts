import { baseUrl } from "@/baseUrl";
import axios from "axios";

export async function sendOtp(mobileNumber: string) {
    try {
        const res = await axios.post(`${baseUrl}/api/sendOtp`, {
            phone: `+91${mobileNumber}`,
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
    
}