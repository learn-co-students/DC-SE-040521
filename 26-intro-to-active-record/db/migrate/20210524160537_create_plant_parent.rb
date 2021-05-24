class CreatePlantParent < ActiveRecord::Migration[5.2]
  def change
    create_table :plant_parents do |table_helper|
      table_helper.string :name
    end
  end
end
