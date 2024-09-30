import { userAddress } from "./UserAddress"

export type User={
    userName:string,
    userEmail:string,
    userPassword:string,
    phoneNumber:number,
    address:userAddress
}