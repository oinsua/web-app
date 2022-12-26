import { UserId } from "model/UserId";

type User_JsonPlaceholder = {
    id: string,
    name: string,
    username: string,
    email: string,
    address : {},
    phone: string,
    website: string,
    company: {}
};
export const userIdAdapter : [UserId] | any = (user: User_JsonPlaceholder) => {
    return {
       id: user.id,
       name: user.name,
       username: user.username,
       email: user.email,
       phone: user.phone
    }
};