class CreateUserMeditations < ActiveRecord::Migration[6.0]
  def change
    create_table :user_meditations do |t|
      t.integer :user_id, :references => [:users, :id]
      t.integer :meditation_id, :references => [:meditations, :id]
      t.timestamps
    end
  end
end
