class MeditationsController < ApplicationController
  before_action :set_meditation, only: [:show, :update, :destroy]

  # GET /meditations
  def index
    @user = User.find(params[:user_id])
    render :json => @user.user_meditations.to_json
  end

  def create
    @meditation = UserMeditation.create(meditation_params)
  end


  def meditation_params
    params.permit(:user_id, :meditation_id, :meditation)
  end

end