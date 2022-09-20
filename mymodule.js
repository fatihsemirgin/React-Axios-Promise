import axios from "axios"

function getUser(id) {
    return new Promise(async(resolve,reject)=>{
                const {data} =await axios("https://jsonplaceholder.typicode.com/users/"+id)
                resolve(data)
                // console.log(data);
    })
}
function getPost(id) {
    return new Promise(async(resolve,reject)=>{
        const {data} =await axios("https://jsonplaceholder.typicode.com/posts/"+id)
        resolve(data)
        // console.log(data);
    })
}

export default async function getData(id_number) {
    const user = await getUser(id_number);
    const post = await getPost(id_number);
    const data = {
        ...user,
        posts: post
    };
    console.log(data);
}