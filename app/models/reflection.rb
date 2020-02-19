class Reflection < ApplicationRecord
  has_many :moods
  has_many :reflection_responses
  has_many :responses, :through => :reflection_responses

  accepts_nested_attributes_for :moods
  accepts_nested_attributes_for :reflection_responses
end
