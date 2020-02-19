class ReflectionsController < ApplicationController

  def index
    @thoughts = Thought.limit(params[:number])
    render :json => @thoughts.to_json(:include => {:responses => { :include => [:follow_ups, :thinking_trap] }})
  end

  def create
    @reflection = Reflection.create(reflection_params)
    params[:moods].each do |mood|
      Mood.create(value: mood[:value], reflection: @reflection)
    end
    
    params[:reflection_responses].each do |reflection_response|
      ReflectionResponse.create(response_id: reflection_response[:response_id], reflection: @reflection)
    end
    
  end

  private

  def reflection_params
    params.require(:reflection).permit(:user_id, :moods, :reflection_responses)
  end

end
