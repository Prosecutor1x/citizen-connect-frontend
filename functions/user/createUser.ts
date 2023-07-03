import { IUser } from '@/Interface/UserInterface'
import { baseUrl } from '@/baseUrl'
import axios from 'axios'

export async function createUser(userData:Partial<IUser>) {
    
    try {
        const res = await axios.post(`${baseUrl}/api/createUser`, userData)
        return res.data
    } catch (err: any) {
        console.log(err)
        if (err.response.data === 'No documents found') {
            return false
        }
    }
}