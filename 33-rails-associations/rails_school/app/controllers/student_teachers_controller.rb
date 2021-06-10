class StudentTeachersController < ApplicationController

    def new
        @student_teacher = StudentTeacher.new

        @students = Student.all
        @teachers = Teacher.all
    end

    def create
        new_student_teacher = StudentTeacher.create(student_teacher_params)

        redirect_to student_path(new_student_teacher.student.id)
    end

    private
    def student_teacher_params
        params.require(:student_teacher).permit(:name, :location, :student_id, :teacher_id)
    end
end
