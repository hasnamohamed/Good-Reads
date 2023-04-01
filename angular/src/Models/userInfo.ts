export interface RegistrationInfo
{
    firstName:string
    lastName:string
    email:string
    password:string
    passwordConform:string
    gender:"female" | "male" | "no selection"
    secretQuestion:string
    secretAnswer:string
}

export interface loginInfo
{
    email:string
    password:string
}

export interface tokenInfo
{
  email:string;
  token:string;
  expiresIn:string;
  userImage:string
}

export interface restInfo
{
  email:string
  password:string
  passwordConform:string
  secretQuestion:string
  secretAnswer:string
}
