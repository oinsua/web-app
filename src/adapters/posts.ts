import { Posts } from "../model/Posts";

export type Res_Posts = {
    userId: number,
    id: number,
    title: string,
    body: string,
};
export const postsAdapter : [Posts] | any = (data:[Res_Posts]) => {
    return data.map(post => ({
        id: post.userId.toString(),
        number: post.id.toString(),
        title: post.title,
        text: post.body,
    }))
}; 