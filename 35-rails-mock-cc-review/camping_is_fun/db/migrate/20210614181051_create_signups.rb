class CreateSignups < ActiveRecord::Migration[6.0]
  def change
    create_table :signups do |t|
      t.integer :time
      t.belongs_to :activity, null: false, foreign_key: true
      t.belongs_to :camper, null: false, foreign_key: true

      t.timestamps
    end
  end
end
