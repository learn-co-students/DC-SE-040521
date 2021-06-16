class StudentTeachersController < ApplicationController

    def new
        @student_teacher = StudentTeacher.new

        @students = Student.all
        @teachers = Teacher.all
    end

    def create
        new_student_teacher = StudentTeacher.create(student_teacher_params)

        if new_student_teacher.valid?
            redirect_to student_path(new_student_teacher.student.id)
        else
            flash[:errors] = new_student_teacher.errors.full_messages
            
            redirect_to new_student_teacher_path
        end
    end

    private
    def student_teacher_params
        params.require(:student_teacher).permit(:name, :location, :student_id, :teacher_id)
    end
end
