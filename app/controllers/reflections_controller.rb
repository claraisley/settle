class ReflectionsController < ApplicationController

  def index
    @thoughts = Thought.all
    
    render json: @thoughts
  end

end
