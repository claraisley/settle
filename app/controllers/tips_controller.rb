class TipsController < ApplicationController
  def index
    @tips = Tip.all
    render json: @tips
  end
end
