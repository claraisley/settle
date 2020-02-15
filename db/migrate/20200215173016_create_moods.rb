class CreateMoods < ActiveRecord::Migration[6.0]
  def change
    create_table :moods do |t|
      t.integer :reflection_id, :references => [:reflections, :id]
      t.integer :value
      t.timestamps
    end
  end
end
