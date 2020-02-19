class UserInterestsController < ApplicationController
  
  def create
    @user_interest = UserInterest.new(user_interest_params)
    
    if @user_interest.save
      render json: @user_interest, status: :created, location: @interest
    else
      render json: @user_interest.errors, status: :unprocessable_entity
    end
  end

  private
  # Only allow a trusted parameter "white list" through.
  def user_interest_params
    params.permit(
      :user_id, :interest_id, :value
    )
  end
end

