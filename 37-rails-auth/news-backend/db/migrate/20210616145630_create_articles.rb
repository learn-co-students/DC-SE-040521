class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.string :description
      t.string :image
      t.integer :likes

      t.timestamps
    end
  end
end
