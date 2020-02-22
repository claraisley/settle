class Mood < ApplicationRecord
  include ActiveModel::Serializers::JSON
  belongs_to :reflection
  def attributes
    {'id' => nil, 'name' => nil, 'URL' => nil}
  end
end
