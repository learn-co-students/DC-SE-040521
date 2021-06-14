class SignupsController < ApplicationController

    def new 
        @signup = Signup.new

        @campers = Camper.all
        @activities = Activity.all
    end

    def create
        @signup = Signup.create(signup_params)

        redirect_to camper_path(@signup.camper.id)
    end

    private
    def signup_params
        params.require(:signup).permit(:activity_id, :camper_id, :time)
    end
end
