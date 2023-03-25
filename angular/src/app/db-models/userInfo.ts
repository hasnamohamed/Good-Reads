
export interface RegistrationInfo
{
    firstName:string
    lastName:string
    email:string
    password:string
    passwordConform:string
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
  email:any;
  token:any;
  expiresIn:any;
}

export interface restInfo
{
  email:string
  password:string
  passwordConform:string
  secretQuestion:string
  secretAnswer:string
}
