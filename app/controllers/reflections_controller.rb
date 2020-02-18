class ReflectionsController < ApplicationController

  def index
    @thoughts = Thought.limit(4)
    render :json => @thoughts.to_json(:include => [:responses])
  end

end
