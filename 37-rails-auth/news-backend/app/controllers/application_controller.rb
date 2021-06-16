class ApplicationController < ActionController::API
    before_action :logged_in?
    
    def encode_token(data)
        JWT.encode(data, "Flatiron", "HS256")
        # specifiying the algorithm is optional if you're using HS256
        # make sure the data is a hash
    end

    def logged_in?
        headers = request.headers["Authorization"]
        token = headers.split(" ")[1]

        begin
            user_id = JWT.decode(token, "Flatiron", "HS256")[0]["user_id"]
            user = User.find(user_id)
        rescue
            # user is not found because token was not provided
            user = nil
        end

        unless user
            render json: {error: "Please login"}
        end


    end
end
