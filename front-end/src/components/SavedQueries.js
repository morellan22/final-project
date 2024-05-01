
export function SavedQueries(params) {

    function onSavedQueryClick(savedQuery){
      params.onQuerySelect(savedQuery);
    }
  
    function getQueries() {

      return params.savedQueries.map((item, idx) => {
        let trimTitle = item.queryName.substring(0, 30);
        return (
        
        <li 
          key={idx} 
          onClick={()=>onSavedQueryClick(item)} 
          className={(item.queryName === params.selectedQueryName)?"selected":""}
        >{trimTitle + ": \"" + item.q + "\""} </li>);
      })
    } 
    return (
        <div>
          <div className={(params.currentUserMatches("admin")&&params.selectedQuery.language)?"moreVisible":"moreHidden"}>
            <h4>Details Queries</h4>
          
            <span>Language:{params.selectedQuery.language}</span>
            <br/>
            <span>Page Size:{params.selectedQuery.pageSize}</span>
          </div>
          <div>
          <ul >{
            (params.savedQueries && params.savedQueries.length > 0)
            ? getQueries()
            : <li>No Saved Queries, Yet!</li>
          }</ul>
          </div>
        </div>
      )
    
    }