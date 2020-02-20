class MoodCalendarController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    render :json => @user.to_json(:include => {:reflections => { :include => :moods }}), status: :ok
  end

end