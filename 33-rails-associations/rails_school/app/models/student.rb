class Student < ApplicationRecord
    has_many :student_teachers, dependent: :destroy

    has_many :teachers, through: :student_teachers
end