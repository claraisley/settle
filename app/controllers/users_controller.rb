class UsersController < ApplicationController

  def index
    
    render json: {value: 'hello!'}
  end

end
