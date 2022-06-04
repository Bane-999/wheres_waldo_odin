Rails.application.routes.draw do
  resources :levels, only: [:index] 
  
  namespace :api do
      namespace :v1 do
        resources :characters, only: [:index]
      end
  end

  root "levels#index"
end
