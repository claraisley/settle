class ReflectionsController < ApplicationController

  def index
    @thoughts = Thought.limit(params[:number])
    render :json => @thoughts.to_json(:include => {:responses => { :include => :follow_ups }})
  end

end
