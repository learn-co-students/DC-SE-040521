require "pry"

name = "Goofy"
puts name

AGE = 52

this_is_an_integer = 13
this_is_a_float = 4.2

is_a_boolean = true

is_a_symbol = :goofy

# my_hash = {name: "Goofy"}
my_hash = {:name => "Goofy"}

another_hash = {"age" => "fifty"}

yet_another_hash = {:computer => "mac", "computer" => "windows"}

no_value_here = nil

def say_cheese cheese_name 
    "#{cheese_name}!!"
end

binding.pry

another_value = "Hello"