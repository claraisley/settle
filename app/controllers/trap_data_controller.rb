class TrapDataController < ApplicationController


  def index
    # @tips = Tip.all
    # render json: @tips

    @user = User.find(params[:id])

    
    @responses = @user.reflection_responses
      .map(&:response)
      .group_by(&:thinking_trap_id)
      .reduce({}) do |dict,(trap_id,responses)|
        dict[trap_id] = responses.map(&:value).sum.to_f / responses.length
        dict
      end

    render json: @responses

  end


end
