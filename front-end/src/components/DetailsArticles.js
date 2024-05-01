export function DetailsArticles(params){
    return (
        <div>
         <span>Description:{params.item.description}</span>
         <br/>
         <span>Author:{params.item.author}</span>
        </div>
      )
    
}