class CreateReflections < ActiveRecord::Migration[6.0]
  def change
    create_table :reflections do |t|
      t.integer :user_id, :references => [:users, :id]
      t.timestamps
    end
  end
end
