export type DoctorListItemProps = {
    details:DoctorDetails
}

export type DoctorDetails = {
    id:number,
    name:string,
    specialist:string,
    followers:number,
    experience:string,
    rating:number,
    bio:string,
    specializes_in:string[],
    video_consultation_fee:number,
    reviews:Review[],
    work_experience:WorkExperience[],
    academics:Academics[]
}


export type Review = {
    star:number,
    content:string,
    postedName:string,
    date:string
}
export type WorkExperience = {
    clinic:string,
    location:string,
    role:string
}
export type Academics = {
    institution:string,
    degree:string,
    year:number
}