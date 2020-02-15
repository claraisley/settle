class CreateResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :responses do |t|
      t.integer :thought_id, :references => [:thoughts, :id]
      t.integer :thinking_trap_id, :references => [:thinking_traps, :id]
      t.integer :value
      t.text :text
      t.timestamps
    end
  end
end
