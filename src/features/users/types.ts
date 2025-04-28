export type UserCardProps = {
    title: string;
    iconSrc: string;
    numberOfUser: number;
}

export type Guarantor = {
    name: string;
    phoneNumber: string;
    email: string;
    relationship: string
}

export type User =  {
    id: string;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
    fullName: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    residenceType: string;
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
    twitter: string;
    facebook: string;
    instagram: string;
    guarantors: Array<Guarantor>
  }