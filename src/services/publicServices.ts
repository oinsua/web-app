import { User } from '../model/User';
import { loadAbort } from '../utilities/loadAbortAxios';
import axios from 'axios';
import { Posts } from '../model/Posts';

export const getUser = () => {
    const controller = loadAbort();
    return { call: axios.get<User>('https://jsonplaceholder.typicode.com/users', { signal: controller.signal }), controller };
  };

export const getPost = () => {
    const controller = loadAbort();
    return { call: axios.get<Posts>('https://jsonplaceholder.typicode.com/posts', { signal: controller.signal }), controller };
};

