class MeditationsController < ApplicationController
  before_action :set_meditation, only: [:show, :update, :destroy]

  # GET /meditations
  def index
    @meditations = Meditation.all
    render json: @meditations
  end

  def create
    @meditation = UserMeditation.create(meditation_params)
  end


  def meditation_params
    params.permit(:user_id, :meditation_id, :meditation)
  end

end