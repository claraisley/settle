class ThinkingTrap < ApplicationRecord
  has_many :responses
  has_many :follow_ups
end
