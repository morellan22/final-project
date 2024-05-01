import { fetchData } from ".";
import { exampleQuery } from "../data";

const urlQueries = "/queries";
export async function getQueryApi(currentUser,callback){
    let data = {};
    if(currentUser===null){
        data = exampleQuery;
    }
    else{
        const myInit = {
            method:'GET',
            mode: 'cors'
            };

        try {
            data = await fetchData(urlQueries, myInit);
        } catch (error) {
            console.error(error);
        }
     }
    return callback(data);

} 
export async function saveQueryApi(querySaved){
    const myInit = {
        method:'POST',
        mode: 'cors',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(querySaved)
        };
   
    try {
        await fetchData(urlQueries, myInit);
    } catch (error) {
        console.error(error);
    }
    console.log("savedQueries array has been persisted:");
    return true;

}
export async function deleteQueryApi(querySaved){
    console.log(querySaved)
    const myInit = {
        method:'DELETE',
        mode: 'cors',
        headers:{'Content-type':'application/json'}
        };
    
    try {
        await fetchData(urlQueries + "/" + querySaved.queryName, myInit);
    } catch (error) {
        console.error(error);
    }
    console.log("savedQueries array has been persisted:");
    return true;

}  
export async function deleteAllQueryApi(){
    const myInit = {
        method:'DELETE',
        mode: 'cors',
        headers:{'Content-type':'application/json'}
        };
    
    try {
        await fetchData(urlQueries, myInit);
    } catch (error) {
        console.error(error);
    }
    console.log("savedQueries array has been persisted:");
    return true;

}  

