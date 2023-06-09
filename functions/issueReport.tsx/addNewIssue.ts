import { IIssueData } from "@/Interface/ReportIinterface"
import { baseUrl } from "@/baseUrl"
import axios from "axios"

export async function addnewIssue(problemData: IIssueData) {
    try {
        const res = await axios.post(`${baseUrl}/api/addNewIssue`, problemData)
        return res.data
    } catch (err: any) {
        console.log(err)
    }
}