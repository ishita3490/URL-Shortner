# URL-Shortner
Design a URL shortener backend service that takes in a valid URL and returns a shortened URL, redirecting the user to the previously provided URL.

TechStack: JavaScript, Express.js, Node.js, Mongodb

Steps to use my service:
1. Clone the Repository
2. Navigate to Project Directory
3. Install Dependencies using commands: "npm i express", "npm i mongoose"
4. Start the Server using command: npm start
5. Open Postman and make a POST request to API  "http://localhost:8003/url", and define the url you want to get shortened in the body and you will get short id .
6. Paste that short id after "http://localhost:8003/" in browser and functional website will open.

Routes
POST /URL - Generates a new short URL and returns the shortened URL in the format example.com/random-id.
GET /:id - Redirects the user to the original URL.


when a user gives a URL to get shortened, that URL will be sent as a body of API call in json format to backend.We convert the provided link to a JSON string using JSON.stringify(data) and send it in the body of the request.
After making the request, we handle the response using .then() and .catch() to log the result or any errors.





