class Api::V1::UsersController < ApplicationController
    # before_action :logged_in? <-- inherited from ApplicationController
    skip_before_action :logged_in?, only: [:create, :login]

    def create
        user = User.create(user_params)

        if user.valid?
            render json: user
        else
            render json: {error: "Unable to create a user"}
        end
    end

    def login
        user = User.find_by(username: params[:username])
        
        if user && user.authenticate(params[:password])
            render json: {username: user.username, token: encode_token({user_id: user.id})}
        else
            render json: {message: "Wrong username or password"}
        end
    end

    def user_params
        params.permit(:username, :password)
    end
end
