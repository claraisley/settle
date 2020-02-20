class MoodCalendarController < ApplicationController

  def index
    @user = User.find(params[:user_id])

    @moodsArray = []
    @user.moods.each do |mood|
      @moodsArray.push(mood)
    end

    render :json => @moodsArray.to_json

    # old verion that works but sends back everything
    # render :json => @user.to_json(:include => {:reflections => { :include => :moods }})
  end

end