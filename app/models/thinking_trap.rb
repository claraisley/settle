class ThinkingTrap < ApplicationRecord
  include ActiveModel::Serializers::JSON
  has_many :responses
  has_many :follow_ups
  def attributes
    {'id' => nil, 'name' => nil, 'example_statement1' => nil, 'example_statement2' => nil, 'text' => nil, 'definition' => nil }
  end
end
