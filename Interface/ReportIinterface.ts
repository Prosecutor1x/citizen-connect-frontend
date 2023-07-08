export interface ICommentData{
    body:string,
    type:"officer"|"citizen",
    userName:string,
}

export interface IIssueData{
    issuetitle:string,
    issuedescription:string,
    issuetype:string,
    issuelevel:"low"|"moderate"| "severe"
    issuemedia?:string[]
    issuelocation:string;
    issuecomments?:string[]
    issuedate:number,
    issueRaiser:string,
    issueprogress?:string
    _id?:string
}