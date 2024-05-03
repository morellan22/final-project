export function DetailsArticles(params){
    return (
      <div>
        <img class="article-photo" src={params.item.urlToImage}></img>
         <span>Description:{params.item.description}</span>
         <br/>
         <span>Author:{params.item.author}</span>
        </div>
      )
    
}