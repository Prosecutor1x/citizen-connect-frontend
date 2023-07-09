import { IUser } from '@/Interface/UserInterface'
import { baseUrl } from '@/baseUrl'
import axios from 'axios'

export default async function getUserById(userId: string) {
    try {
        const res = await axios.get(`${baseUrl}/api/getUser/${userId}`)
        return res.data.username
    } catch (err: any) {
        console.log(err)
        if (err.response.data === 'No documents found') {
            return false
        }
    }
}