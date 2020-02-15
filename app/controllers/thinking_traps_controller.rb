class ThinkingTrapsController < ApplicationController

  def index
    @thinkingtraps = ThinkingTrap.all
    render json: @thinkingtraps
  end
  
end
