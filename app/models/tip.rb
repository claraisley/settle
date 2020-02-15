class Tip < ApplicationRecord
  include ActiveModel::Serializers::JSON

  def attributes
    {'id' => nil, 'name' => nil, 'text' => nil}
  end
end
