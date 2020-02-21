Rails.application.routes.draw do
  resources :meditations, only: [:index, :create]
  resources :interests
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :thinking_traps
  resources :tips

  resources :user_interests, only: [:create, :index]

  resources :reflections, only: [:index, :create]

  resources :users, param: :_email
  post '/auth/login', to: 'authentication#login'
  get '/mood-calendar', to: 'mood_calendar#index'
  get '/*a', to: 'application#not_found'

end
