Rails.application.routes.draw do
  resources :meditations, only: [:index, :create]
  resources :interests
  resources :thinking_traps
  resources :tips
  resources :user_interests, only: [:create, :index]
  resources :users, param: :_email
  resources :reflections, only: [:index, :create]

  get "/user_meditations", to: 'meditations#data'
  get "/trap_data", to: 'trap_data#index'
  post '/auth/login', to: 'authentication#login'
  get '/mood-calendar', to: 'mood_calendar#index'
  get '/*a', to: 'application#not_found'

end
