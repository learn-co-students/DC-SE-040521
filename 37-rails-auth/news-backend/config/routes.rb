Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :articles
      resources :users
      post "/login", to: "users#login"
    end
  end

end

# before: /articles
# now: /api/v1/articles
