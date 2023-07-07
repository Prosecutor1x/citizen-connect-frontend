export interface IProblemData{
    issuetitle:string,
    issuedescription:string,
    issuetype:string,
    issuelevel:"low"|"moderate"| "severe"
    issuemedia?:string[]
    issuelocation:string;
    issuecomments?:string[]
    issuedate:number,
    issueissueRaiser:string,
    issueprogress?:string
}