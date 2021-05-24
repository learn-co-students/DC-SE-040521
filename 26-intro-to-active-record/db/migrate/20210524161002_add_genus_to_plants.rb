class AddGenusToPlants < ActiveRecord::Migration[5.2]
  def change
    add_column :plants, :genus, :string
    # add new column (table name, column name, data type)
  end
end
