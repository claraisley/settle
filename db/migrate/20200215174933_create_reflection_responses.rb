class CreateReflectionResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :reflection_responses do |t|
      t.integer :response_id, :references => [:responses, :id]
      t.integer :reflection_id, :references => [:reflections, :id]
      t.timestamps
    end
  end
end
