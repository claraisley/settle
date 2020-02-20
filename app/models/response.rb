class Response < ApplicationRecord
  belongs_to :thought
  belongs_to :thinking_trap
  has_many :follow_ups
  has_many :reflection_responses
  has_many :reflections, :through => :reflection_responses
end
