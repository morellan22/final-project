
 export const fetchData = async(url, options)=>{
    try {
         let response = await fetch(url, options);
         if(!response.ok)
            throw new Error(`Error fetching data: ${response.status}`);
        return  response.json();
    } catch (error) {
        console.error(error);
    }
 }


 