class Tweet
    attr_accessor :message
    attr_reader :user

    # single source of truth for Tweets
    @@all_tweets = []

    def initialize(message_arg, user_arg)
        @message = message_arg
        
        # reference to whoever the tweet belongs to
        @user = user_arg 

        # self is the new tweet instance object
        @@all_tweets << self
    end

    # self used as name of a class method `all`
    def self.all
        @@all_tweets
    end

    # def user
    #     @user
    # end

    def username
        # user.username  # using getter method
        # @user.username  # using instance variable
        self.user.username  # using self
    end
end