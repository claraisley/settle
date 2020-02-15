class Thought < ApplicationRecord
  belongs_to :interest, optional: true
  has_many :responses
end
