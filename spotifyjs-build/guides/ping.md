# Ping

To calculate ping between spotify api and your client is easy. We will suggest you to use the v5.x version for ping usage.

```js
// Setup client
const Spotify = require('spotify-api.js');
const client = new Spotify.Client('token');

// Make a ping function
async function ping(){
    let startedAt = Date.now(); // Started at ping time
    await client.tracks.search('search'); // Search some tracks to test ping
    console.log(`My ping was ${Date.now() - startedAt} ms!`);
};

ping(); // Will display the ping
```

This will be the same for other classes as basic.