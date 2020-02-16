Rails.application.routes.draw do

  devise_for :users
  #root to: "home#index"
  resources :interests
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :users, :only => [:show, :create, :update, :destroy]
  resources :sessions, :only => [:create, :destroy] 
  resources :thinking_traps
  resources :tips
end
