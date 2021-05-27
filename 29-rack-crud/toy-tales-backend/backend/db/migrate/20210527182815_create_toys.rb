class CreateToys < ActiveRecord::Migration[5.2]
  def change
    create_table :toys do |t|
      t.string :name
      t.string :image
      t.integer :likes
    end
  end
end
