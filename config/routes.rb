Rails.application.routes.draw do
  resources :interests
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'authenticate', to: 'authentication#authenticate'
  resources :users 
  resources :thinking_traps
  resources :tips
end
