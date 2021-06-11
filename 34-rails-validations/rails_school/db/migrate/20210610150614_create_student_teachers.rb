class CreateStudentTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :student_teachers do |t|
      t.belongs_to :student, null: false, foreign_key: true
      t.belongs_to :teacher, null: false, foreign_key: true
      t.string :name
      t.string :location

      t.timestamps
    end
  end
end
