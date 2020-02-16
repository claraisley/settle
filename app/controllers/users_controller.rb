class UsersController < ApplicationController
  before_action :authenticate_with_token!, only: [:update, :destroy]
  respond_to :json

  def index
    @users = User.all
    render json: @users
  end

  def destroy
    current_user.destroy
    head 204
  end

end
