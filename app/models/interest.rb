class Interest < ApplicationRecord
  has_many :user_interests
  has_many :thoughts
end
