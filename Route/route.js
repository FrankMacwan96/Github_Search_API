const express = require('express');
const router = express.Router();
const Axios = require('axios');
const secureEnv = require('secure-env');
global.env = secureEnv({secret:'Frank'});
const GitHubUser = require('../Model/data');

router.get('/', async(req, res) => {
    
    location = req.query.location;

    try {
        var result = await Axios.get(`https://api.github.com/search/users?q=location:${location}&per_page=10`, {
            headers : {
                Authorization: 'token' + global.env.GITTOKEN
            }
        });
    } catch(e) { 
        console.log(e) 
    }

    var final = [];
        
    for (var key in result.data.items) {
        // final[key] = {
        //     "login"     : result.data.items[key]["login"],
        //     "html_url"  : result.data.items[key]["html_url"],
        //     "location"  : location
        // };

        let data = new GitHubUser({
                login       : result.data.items[key]["login"],
                html_url    : result.data.items[key]["html_url"],
                location    : location
            })
        
        try {   
            await data.save(); 
            final.push(data);   
        } catch(e) { 
            console.log(e) 
        }
    }

    if(final.length == 0) { res.send('The users of this city already exist in the database, please try a different city'); }
    res.send(final);
});


module.exports = router;