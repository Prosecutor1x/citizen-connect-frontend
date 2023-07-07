import { baseUrl } from '@/baseUrl'
import axios from 'axios'

export async function checkUser(mobileNumber: string) {
    
    try {
        const res = await axios.post(`${baseUrl}/api/checkUser`, {
            user_phone: `+91${mobileNumber}`,
        })
        return res.data
    } catch (err: any) {
        console.log(err)
        if (err.response.data === 'No documents found') {
            return false
        }
    }
}
