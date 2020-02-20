class ReflectionsController < ApplicationController

  def index

    #psuedo code for what I want to do:
    # send the user_id here with the get (from state)
    # @user_id = (params[:user_id])
    #@user_id = 2

    # @thoughts = Thought.where(interest_id: NIL)

    
    # # .or(Thought.where(interest_id:))
    

    # # Post.where(id: 1).or(Post.where(title: 'Learn Rails'))

    # @interest_ids = UserInterest.select(:interest_id).where(["user_id = :user_id", {user_id: 2}]).to_a
    # puts "here"
    # puts @interest_ids

    #YourModel.where("categories.id IN ? OR category_relationships.category_id IN ?", category_ids, category_ids)

    

    # render :json => @interest_ids.to_json
   
    # grab the interests associated with that user via the user_id
    # grab the recent questions(aka thoughts) they have done via reflections, reflection_responses
    # grab thoughts where interest is NULL && where interest lines up with what user
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
