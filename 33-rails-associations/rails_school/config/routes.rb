Rails.application.routes.draw do
  
  resources :student_teachers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :teachers
  
  resources :students

  # get '/students', to: 'students#index', as: 'students'
  # # students_path ====> /students

  # get '/students/new', to: 'students#new', as: 'new_student'
  # # new_student_path ====> /students/new

  # get '/students/:id', to: 'students#show', as: 'student'
  # # student_path ====> /students/:id

  # get '/students/:id/edit', to: 'students#edit', as: 'edit_student'
  # # edit_student_path ====> /students/:id/edit

  # post '/students', to: 'students#create'

  # patch '/students/:id', to: 'students#update'

  # delete '/students/:id', to: 'students#destroy'
end
