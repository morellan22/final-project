import { fetchData } from ".";
const urlNews="/news";
export async function saveNewsApi(news,callback){
    console.log(news)
    const myInit = {
        method:'POST',
        mode: 'cors',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(news)
        };
    let data = {};
    try {
        data = await fetchData(urlNews, myInit);
    } catch (error) {
        console.error(error);
    }
    
    return callback(data);

} 
