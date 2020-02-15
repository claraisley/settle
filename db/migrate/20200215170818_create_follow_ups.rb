class CreateFollowUps < ActiveRecord::Migration[6.0]
  def change
    create_table :follow_ups do |t|
      t.integer :response_id, :references => [:responses, :id]
      t.integer :thinking_trap_id, :references => [:thinking_traps, :id]
      t.text :text
      t.timestamps
    end
  end
end
