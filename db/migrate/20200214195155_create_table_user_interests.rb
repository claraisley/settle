class CreateTableUserInterests < ActiveRecord::Migration[6.0]
  def change
    create_table :user_interests do |t|
      t.integer :user_id, :references => [:users, :id]
      t.integer :interest_id, :references => [:interests, :id]
      t.string :value
    end
  end
end
