class FollowUp < ApplicationRecord
  belongs_to :response
  belongs_to :thinking_trap
end
