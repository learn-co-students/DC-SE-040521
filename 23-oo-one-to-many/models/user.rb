class User
    attr_reader :username
    attr_accessor :bio

    def initialize(username, bio)
        @username = username
        @bio = bio
    end

    # def username
    #     @username
    # end

    def tweets
        # does this tweet have the same user
        # as this instance (user)?
        Tweet.all.select {|tweet| tweet.user == self }
    end

    def post_tweet(message_arg)
        # this method is taking a message argument
        # and creating a new tweet
        Tweet.new(message_arg, self)
    end

    def self.print_tweets
        Tweet.all.map {|tweet| tweet.message}
    end
end