class StudentTeacher < ApplicationRecord
  belongs_to :student
  belongs_to :teacher

  validates :location, length: { maximum: 20 }

end
