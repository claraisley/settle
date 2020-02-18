class ReflectionsController < ApplicationController

  def index
    @thoughts = Thought.all
    render :json => @thoughts.to_json(:include => [:responses])
  end

end
