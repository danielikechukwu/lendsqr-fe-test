export type UserCardProps = {
    title: string;
    iconSrc: string;
    numberOfUser: number;
}

export type Guarantor = {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    relationship: string
}

export type User =  {
    id: number;
    organization: string;
    code: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
    fullName: string;
    accountNumber: string;
    bankName: string;
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