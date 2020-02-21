class UserInterest < ApplicationRecord
belongs_to :user
belongs_to :interest
def attributes
  {'value' => nil, 'interest_id' => nil}
end
end
