class CreateInterests < ActiveRecord::Migration[6.0]
  def change
    create_table :interests do |t|
      t.string :name
      t.text :question
      t.text :question_field
      t.timestamps
    end
  end
end
