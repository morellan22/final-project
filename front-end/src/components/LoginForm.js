export function LoginForm(params) {

    const handleChange = (event) => {
        let newCredentials = { ...params.credentials };
        newCredentials[event.target.name] = event.target.value;
        params.setCredentials(newCredentials);
    };
    return (
        <div className="box login" style={{ maxWidth: "unset" }}>

            <div className={(params.currentUser) ? "hidden" : "visible"}>
                <div >

                    <label htmlFor="user">User: </label>
                    <input type="text" size={10} id="user" name="user" placeholder="Type your user" value={params.credentials.user} onChange={handleChange} />

                    <label htmlFor="password">Password: </label>
                    <input type="password" size={10} id="password" placeholder="Type your password" name="password" value={params.credentials.password} onChange={handleChange} />
                </div>
            </div>
            <div className="user">
            &nbsp;User: <span style={{ fontWeight: "bold" }} >{(params.currentUser) ? params.currentUser.user : "not logged in"}</span>
           <button className="--bs-primary" onClick={params.login}>
                {(params.currentUser) ? "Logout" : "Login"}
            </button>
            </div>
        </div>
    );
}