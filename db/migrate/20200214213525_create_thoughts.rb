class CreateThoughts < ActiveRecord::Migration[6.0]
  def change
    create_table :thoughts do |t|
      t.integer :interest_id, :references => [:interests, :id]
      t.text :text
      t.timestamps
    end
  end
end
