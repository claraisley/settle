class Response < ApplicationRecord
  belongs_to :thought
  belongs_to :thinking_trap
  has_many :follow_ups
  has_many :reflection_responses
end
