class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :price
      t.integer :magazine_id
      t.integer :reader_id
    end
  end
end
