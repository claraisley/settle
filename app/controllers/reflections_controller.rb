class ReflectionsController < ApplicationController

  def index

    # send the user_id here with the get (from state)
    # user it find the user
    @user = User.find(params[:id])
   

    # grab universal thoughts, now an array
    @thoughts = Thought.where(interest_id: nil).to_a

    @thoughtsArray = []

    # grabs the interests associated with that user and the thoughts that use that interest, 
    # joins them to @thoughtsArray
    @user.interests.each do |interest|
      @thoughtsArray.concat(interest.thoughts.to_a)
    end

    # joins @thoughts and @thoughtsArray
    @thoughts.concat(@thoughtsArray)

    # makes param into integer so I can use it in sample
    int = Integer(params[:number])

    # takes a sample from the array, each are distinct, number is sent as params
    @random_thoughts = @thoughts.sample(int)
    
    #renders the random thoughts and their responses and followups 
    render :json => @random_thoughts.to_json(:include => {:responses => { :include => [:follow_ups, :thinking_trap] }})
  
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
