# used to require gems
require "pry"

# used to require files
require_relative "models/user"
require_relative "models/tweet"

# user
lulu = User.new("Lulu", "A sweet penguin who lives at the Georgia aquarium")
genie = User.new("Genie", "Just a genie trying to be free from his lamp")

# tweet
tweet1 = Tweet.new("Bad feather day. #molting season", lulu)
tweet2 = Tweet.new("I'm having a great day! The water is nice and warm", lulu)
tweet3 = Tweet.new("I'm freeee!!!!!!", genie)


binding.pry