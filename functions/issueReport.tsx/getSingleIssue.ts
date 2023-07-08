import { IIssueData } from "@/Interface/ReportIinterface"
import { baseUrl } from "@/baseUrl"
import axios from "axios"

export async function getSingleIssue(issueID: string) {
    try {
        const res = await axios.get(`${baseUrl}/api/fetchIssue/${issueID}`)
        return res.data
    } catch (err: any) {
        console.log(err)
    }
}