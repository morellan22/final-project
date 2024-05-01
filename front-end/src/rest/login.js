const urlUsersAuth = "/users/authenticate";

export async function loginApi(credentials, callback) {

      // login
      try {
        const response = await fetch(urlUsersAuth, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });
        if (response.status === 200) {
            callback({ ...credentials });
        } else {
          alert("Error during authentication! " + credentials.user + "/" + credentials.password);
          callback(null);
        }
      } catch (error) {
        console.error('Error authenticating user:', error);
        callback(null);
      }
    
  }