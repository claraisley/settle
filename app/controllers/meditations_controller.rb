class MeditationsController < ApplicationController
  

  # GET /meditations
  def index

    @meditations = Meditation.all
    render :json => @meditations.to_json  
    
  end

  def data
    @user = User.find(params[:user_id])
    render :json => @user.user_meditations.to_json(:include => :meditation)
  end


  def create
    @meditation = UserMeditation.create(meditation_params)
  end


  def meditation_params
    params.permit(:user_id, :meditation_id, :meditation)
  end

end