# Rails as an API

## SWBATs
- [ ] Generate a Rails API
- [ ] Understand how to send data to the backend as `params`
- [ ] Setup CORS configuration

## Application Architecture

For the rest of your time at Flatiron, the architecture we'll be using for our applications is going to consist of **two separate applications**:

- Javascript client frontend (single-page application)
- Rails server backend (JSON API)

![spa example](https://eww-wp.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/02/14064824/single-page-applications.jpg)

Some advantages to this approach are:

- User experience: users don't have to wait for a full-page request/response cycle every time they visit a new part of our application
- Deployment: easier to make changes to one part of the application without affecting the entire stack; faster frontend deployment cycle
- Separation of concerns: frontend and backend are separate; database logic isn't tied to user interface logic; in a production setting, different teams can focus on one or the other

So far, we've spend time building out the frontend of our application in Javascript and used `json-server` as our JSON API; today, we'll be replacing that with a full-blown Rails server.

We'll end up with a project structure that looks like this:

```
.
├── news_frontend (JS)
│   ├── src
│   │   └── index.js
│   └── index.html
└── news_backend (Rails)
    ├── app
    ├── db
    └── etc (all the other rails code)
```

## Setting Up the Backend Rails API

Remember that when you create a new Rails application with `rails new <your_app>`, by default Rails will provide you with a ton of stuff that we will not need in order to build an API. Think of the entire ActionView library (all the view helper methods like `form_for`), ERB, the way sessions and cookies are handled, etc.

[Rails provides a way](http://edgeguides.rubyonrails.org/api_app.html) to set up a project that includes common tools needed for APIs and excludes some of the unnecessary extras.

In your terminal, enter the following command:

```bash
rails new --help
```

This will show you all the option flags you can use when creating a new Rails project. There are a lot! We're going to use a few to keep things simple, but feel free to explore more of these options, and customize your app to remove unnecessary code.

Here's what we'll run to set up our API:

```bash
rails new <my_app_name> --api --database=postgresql -T
```

_(Replace `<my_app_name>` with the actual name of your project)_

This is what the option flags we're using do:

- `--api`: "Preconfigure smaller stack for API only apps". Don't include code for generating **Views**.
- `--database=postgresql`: Use Postgresql as the database instead of SQLite. Will make it easier to deploy our app.
- `-T`: Skip test files.

> If you forget the `--api` flag you need to add this in your ApplicationController: `skip_before_action :verify_authenticity_token`

## CORS

**If you don't follow these steps, you will get a CORS error in your frontend. Please make sure to do this setup!**

Navigate to your Gemfile and uncomment `gem 'rack-cors'` and run `bundle install`. This will allow us to setup Cross Origin Resource Sharing (CORS) in our API. You can read more about CORS [here](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

Basically, CORS is a security feature that prevents API calls from unknown origins. For example, if someone tried to use some malicious JavaScript to steal your bank information and your bank allowed API calls from anywhere, this could be a bad news bears™️ situation.

Let's say your bank is hosted on `https://bankofamerica.com` but a clever hacker tried to impersonate you and send a request with an *origin* of `https://couponvirus.org`. Ideally, your bank would reject requests from unknown *origins* such as `couponvirus.org` and only allow requests from trusted origins or domains like `bankofamerica.com`

Inside of `config/initializers/cors.rb`, uncomment the following code:

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

This snippet is from the [documentation for the `rack-cors` gem](https://github.com/cyu/rack-cors).

Inside the `allow` block: 

- `origins '*'` 
  - allow requests from **all** origins. For now, we will leave the origins open. Later on, we can change this to only allow requests from the address of the frontend repo––localhost:8000 or `www.myapp.com` for example.
- `methods: [:get, :post, :put, :patch, :delete, :options, :head]`
 - allow requests using these HTTP verbs to the API. Read [this](https://www.w3schools.com/tags/ref_httpmethods.asp) if you need a refresher on HTTP methods.

## Versioning

To help organize our code, it's useful to namespace our routes; this makes it more explicit that our routes are intended to be used as API routes. We can also add a version to our API, so that if other developers are reliant on a certain version, we can create a new version without locking out old users

> It's unlikely that you'll create multiple versions of your API for these projects, but it's a good practice to follow as a developer regardless!

We want our namespaced routes for our API to look like this: `/api/v1/articles`

To set up these routes, we can use the `namespace` method in our `routes.db` file:

```rb
# config/routes.rb
Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :articles
    end
  end

end
```

If you want to see the routes that this created for us, you can run:

```bash
rails routes
```

Next, we can create our controller for these routes. We'll have to namespace the controller as well, which means instead of making file the controller directly in the `app/controllers` folder, we have to nest it: `app/controllers/api/v1/articles_controller.rb`

We also have to namespace the classname, in a module, so that Rails can correctly resolve it:

```rb
# app/controllers/api/v1/articles_controller.rb
class Api::V1::ArticlesController < ApplicationController
end
```

Now we can write our controller actions, like usual, to get our API to return some data.

