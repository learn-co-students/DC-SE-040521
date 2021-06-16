class Student < ApplicationRecord
    has_many :student_teachers, dependent: :destroy

    has_many :teachers, through: :student_teachers

    validates :name, presence: true
    validates :age, numericality: { greater_than_or_equal_to: 11, less_than_or_equal_to: 17 }
end