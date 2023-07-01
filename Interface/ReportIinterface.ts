export interface IProblemData{
    title:string,
    description:string,
    type:string,
    level:"low"|"moderate"| "severe"
    media:string[]
    location:string;
    comments:string[]
    date:string,
    issueRaiser:string,
    progress:string
}