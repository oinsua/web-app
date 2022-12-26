import { redirect } from "react-router-dom";

export async function loaderUser({params}: ({userId: string} | any)) {
    console.log({params});
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    return response.json();
}

export async function updateUser({userId, updates}: {userId: string, updates: any}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`,
    {
        method: "POST",
        body: JSON.stringify(updates)
    });
    return response.json();
}

export async function actionUser({ request, params }: {request: any, params: {userId: string} | any}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log({updates});
    console.log('params.userId:', params.userId);
    await updateUser({userId: params.userId, updates});
    return redirect(`/chat/${params.userId}`);
  }