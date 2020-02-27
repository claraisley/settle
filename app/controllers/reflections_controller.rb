class ReflectionsController < ApplicationController

  def index

  #   # send the user_id here with the get (from state)
  #   # user it find the user
    @user = User.find(params[:id])
  
  #  #@user = User.find(1)
  #   # grab universal thoughts sort according to most recent 
    @thoughts = Thought.where(interest_id: nil).to_a
  #  #@sortedDate = @thoughts.sort_by {|thought| thought.most_recent_for(@user)}

   
    

  #   # grabs the interests associated with that user and the thoughts that use that interest
    @thoughtsArray = []
    @user.interests.each do |interest|
      @thoughtsArray.concat(interest.thoughts.to_a)
    end

  #   #samples on random interest-thought
   @interest_thought = @thoughtsArray.sample(1)


  #   # makes param into integer so I can use it below
    int = Integer(params[:number])

  #   # takes first section from the array, each are distinct, amount to take is sent as params
    @sorted_thoughts = @thoughts.sample(int)

  #   # joins interest thoght to sorted thoughts
    @sampled_thoughts = @interest_thought.concat(@sorted_thoughts)
    
    #renders the thoughts and their responses and followups 
    render :json => @sampled_thoughts.to_json(:include => {:responses => { :include => [:follow_ups, :thinking_trap] }})
  
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
