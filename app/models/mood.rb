class Mood < ApplicationRecord
  include ActiveModel::Serializers::JSON
  belongs_to :reflection
end
