class StudentsController < ApplicationController
    def index
        # find all students
        @students = Student.all 
        # render json: @students
    end

    def show
        # find a specific student
       @student = Student.find(params[:id])
    #    render json: @student
    end
end