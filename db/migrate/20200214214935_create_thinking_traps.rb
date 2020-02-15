class CreateThinkingTraps < ActiveRecord::Migration[6.0]
  def change
    create_table :thinking_traps do |t|
      t.string :name
      t.text :example_statement1
      t.text :example_statement2
      t.text :text
      t.text :definition
      t.timestamps
    end
  end
end
