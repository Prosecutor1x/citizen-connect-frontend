export interface IProblemData{
    title:string,
    description:string,
    type:string,
    level:"low"|"moderate"| "severe"
    media?:string[]
    location:string;
    comments?:string[]
    date:number,
    issueRaiser:string,
    progress?:string
}