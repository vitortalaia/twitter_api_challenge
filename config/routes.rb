Rails.application.routes.draw do
  devise_for :users,
    skip: [:registrations, :passwords],
    path: "",
    path_names: {
      sign_in: 'login',
      sign_out: 'logout'
    }

  authenticated :user do
    root "timeline#index", as: :authenticated_root

    get "/timeline/:username", to: "timeline#fetch", as: :timeline
  end

  devise_scope :user do
    root to: "devise/sessions#new"
  end

end
