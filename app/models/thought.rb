class Thought < ApplicationRecord
  belongs_to :interest, optional: true
  has_many :responses

  def most_recent_for(user)
    resp = user.reflection_responses
      .map(&:response)
      .filter {|resp| resp.thought == self}
      .sort { |a,b| b.created_at <=> a.created_at }
      .first

    if resp.nil?
      0
    else
      resp.created_at.to_i
    end
  end
end
