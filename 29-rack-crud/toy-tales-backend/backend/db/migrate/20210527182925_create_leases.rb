class CreateLeases < ActiveRecord::Migration[5.2]
  def change
    create_table :leases do |t|
      t.integer :year
      t.integer :toy_id
      t.integer :car_id
    end
  end
end
