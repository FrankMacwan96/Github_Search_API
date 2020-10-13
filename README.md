# Github_Search_API

A simple NodeJS application for implementing Github Search API for searching top 10 users in a specific location, and stores each unique users in a database.

The github api used, is authenticated by an oAuth token, so the rate limit is increased. 

**Use Case:**

**Step 1:** Clone the repository.

**Step 2:** Go to the repostiory folder and install node modules by 'npm install'.

**Step 3:** Start the server by 'npm start'

**Step 4:** in browser or postman use link : localhost:8000/api/search?location=toronto  , 
                where in location query parameter, you specify a country, city or province/state. 

