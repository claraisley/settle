class Reflection < ApplicationRecord
  has_many :moods
  has_many :reflection_responses
  has_many :responses, :through => :reflection_responses
end
