class StudentsController < ApplicationController
    before_action :find_student, only: [:show, :edit, :update, :destroy]
    # before_action :find_student, except: [:index, :new, :create]

    def index
        # find all students
        @students = Student.all 
        # render json: @students
    end

    def show
        # find a specific student
    #    render json: @student
    end

    def new
        @student = Student.new
    end

    def create
        student = Student.create(student_params)

        redirect_to student_path(student.id)
    end

    def edit
    end

    def update
        @student.update(student_params)

        redirect_to student_path(@student.id)
    end

    def destroy
        # @student = Student.find(params[:id])

        @student.destroy

        redirect_to students_path
    end

    private

    def find_student
        @student = Student.find(params[:id])
    end
    
    def student_params
        params.require(:student).permit(:name, :age, :year, :quote)
    end

end