export function QueryForm(params) {

    const handleChange = (event) => {
        let newQueryObject = { ...params.formObject };
        newQueryObject[event.target.name] = event.target.value;
        params.setFormObject(newQueryObject);
    };

       
    function onSubmitClick(event) {
        event.preventDefault();
        if (!params.formObject.queryName) {
            alert("please provide a name for the query!");
            return;
        }
        if (!params.formObject.q || params.formObject.q.length === 0) {
            alert("please provide some text for the query field!");
            return;
        }
        params.submitToParent(params.formObject);
    }


    return (
        <div>
            <form>
                <div>
                    <label htmlFor="queryName">Query Name: </label>
                    <input type="text" size={10} id="queryName" name="queryName" value={params.formObject.queryName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="q">Query Text: </label>
                    <input type="text" size={10} id="q" name="q" value={params.formObject.q} onChange={handleChange} />
                </div>
            <div className={(params.currentUserMatches("admin"))?"visible":"hidden"} 
                style={{border: "solid black 1px"}}>
                <div>
                    <label htmlFor="language">Language: </label>
                    <input type="text" size={10} id="language" name="language" value={params.formObject.language} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="pageSize">Page Size: </label>
                    <input type="text" size={10} id="pageSize" name="pageSize" value={params.formObject.pageSize} onChange={handleChange} />
                </div>
            </div>
             <span className="buttonQuery">
                    <input type="button" value="Submit" onClick={onSubmitClick} />
                    <input type="button" className={(params.currentUser)?"visible":"hidden"} value="Reset" onClick={() => {if(window.confirm('Delete the item?')){params.resetToParent(params.formObject)};}} />
                    <input type="button" className={(params.currentUserMatches("admin"))?"visible":"hidden"} value="ResetAll" onClick={() => {if(window.confirm('Are you sure you want to erase the list?')){params.resetToParent()};}} />
                </span>                
            </form>

        </div>

    );

}