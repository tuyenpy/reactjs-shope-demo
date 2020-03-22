import axios from 'axios';

export default function postData(path, data) {
    const baseURL = 'https://shopping-api-demo-by-express.herokuapp.com/api/';
    const uri = baseURL + path;
    return new Promise((resolve, reject) => {
       axios.post(uri, {...data})
       .then(data => resolve(data))
       .catch(err => reject(err));
    });
}

// export default function postData(path, data){
//     const baseURL = 'https://shopping-api-demo-by-express.herokuapp.com/api/';
//     const uri = baseURL + path;
//     return new Promise((resolve, reject)=>{
//         fetch(uri, {
//             method: 'POST',
//             body: {
//                 ...data
//             }
//         })
//         .then(res => resolve(res))
//         .catch(err => reject(err));
//     });
// }