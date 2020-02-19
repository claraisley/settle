Rails.application.routes.draw do
  resources :interests
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :thinking_traps
  resources :tips

  resources :user_interests, only: [:create]

  resources :reflections, only: [:index, :create]

  resources :users, param: :_email
  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'
end
