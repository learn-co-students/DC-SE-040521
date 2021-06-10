class AddQuoteToStudents < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :quote, :string
  end
end
