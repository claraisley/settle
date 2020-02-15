class CreateTips < ActiveRecord::Migration[6.0]
  def change
    create_table :tips do |t|
      t.string :name
      t.text :text
      t.timestamps
    end
  end
end
