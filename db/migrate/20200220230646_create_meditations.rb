class CreateMeditations < ActiveRecord::Migration[6.0]
  def change
    create_table :meditations do |t|
      t.string :name
      t.string :URL
      t.integer :time_in_minutes
      t.timestamps
    end
  end
end
