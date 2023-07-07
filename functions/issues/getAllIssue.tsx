import { IProblemData } from "@/Interface/ReportIinterface"
import { baseUrl } from "@/baseUrl"
import axios from "axios"

export async function getAllIssue() {
    try {
        const res = await axios.get(`${baseUrl}/api/fetchIssue`)
        return res.data
    } catch (err: any) {
        console.log(err)
    }
}