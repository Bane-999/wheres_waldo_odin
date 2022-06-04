class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.references :level, null: false, foreign_key: true
      t.float :left
      t.float :right
      t.float :top
      t.float :bottom
      t.string :name

      t.timestamps
    end
  end
end
