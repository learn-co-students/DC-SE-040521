# Request-Response

## Objectives

- [ ] Differentiate between the roles of the client and the server in one request-response cycle
- [ ] Describe the parts of an HTTP Request object and their significances
- [ ] Describe the parts of an HTTP Response object and their significances
- [ ] Make three requests to one server, using different tools (`curl`, Postman, Browser)

## What happens when you type a URL in the browser and press enter?

![request_resp](./req_resp.png)

- What does it take to get these [cute pictures](https://www.reddit.com/r/Awww/) to show up?

My computer/browser communicates with Reddit's computer (dialogue)

- TCP
- IP
- ISP
- Packets

- In the example above, who is the client? Who is the server?

Server - Reddit (Response)
Client - My computer (Request)

- Who makes the request? Who makes the response?

- What are the rules and protocols that govern a request-response cycle called?

- HyperText Transfer Protocol

- What is needed to make a successful HTTP Request?

- URL (Uniform Resource Locator)/URI (Uniform Resource Identifier) - reddit.com/r/awww
- HTTP Verb / Method

  - GET : Read some information
  - POST : Create some information
  - PATCH/PUT : Update some information
  - DELETE : Delete some information

- What kind of documents can a successful HTTP Response send back to your computer? How do you know if a Request was properly processed?

- HTML (HyperText Markup Language) document

  - JS (JavaScript)
  - CSS (Cascading Style Sheets)

- JSON (JavaScript Object Notation) - key value pairs

  - Regular JS object

- Other than using an Internet Browser, what other ways can we fire off a Request-Response Cycle?

## CURL

```shell

curl "https://www.reddit.com/r/Awww/.json"

curl -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36" "https://www.reddit.com/r/Awww/.json"

```

## Three Pillars

- Three Essential Pillars of Front End Web Programming

  - HTML (Hyper Text Markup Language) - Structure
  - CSS (Cascading Style Sheets) - Aesthetics
  - JavaScript - Power/Motion/Be better than just a word doc

- Three Essential Pillars of JS
  - Event Listeners
  - Communication with server (HTTP Request)
  - DOM Manipulation

\*When X **event** happens, do Y **fetch**, and slap Z on/off the **DOM\***

## Resources

- [Postman](https://www.postman.com/)
- [Cat Status Codes](https://http.cat/)
- [Dog Status Codes](https://httpstatusdogs.com/)
- [Rapper Status Codes](http://httpstatusrappers.com/)
