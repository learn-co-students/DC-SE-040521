require "pry"
# Define a class, called Superhero
# Create a setter and getter method for a superhero's attributes
# Write a method in which a superhero will announce an attribute

# local variable (flash)
# @ --> instance variable (@hero_name)
# @@ --> class variable (@@all_superheroes)


# creating class method `all`
# 1. define class variable: @@all_superheroes
# 2. define class method: self.all
# 3. call class variable in body of class method
# 4. push new object into class variable during initialize

class Superhero
    # defines getter methods for attributes
    # attr_reader :hero_name, :real_name, :power
    
    # defines setter methods for attributes
    # attr_writer :power, :hero_name

    # defines getter & setter methods for attributes
    attr_accessor :hero_name, :power
    attr_reader :real_name

    # class variable
    @@all_superheroes = []


    # instance method
    def initialize(hero_name, real_name, power)
        # instance variable = argument initialize receives
        @hero_name = hero_name
        @real_name = real_name
        @power = power

        @@all_superheroes << self
        # @@all_superheroes.push self

        # self used at the instance level
        puts "I am inside of initialize: #{self}"
    end

    # class method
    # show all superheroes at once
    def self.all
        @@all_superheroes
    end

    # class method b/c it has `self` in the title
    def self.who_am_i
        # self used at the class level
        puts "I am inside of class who_am_i: #{self}"
    end

    # instance method
    def who_am_i
        puts "I am inside of instance who_am_i: #{self}"
        puts "I am first #{self.real_name}"  # explicit use of `self` keyword | instance real_name: Barry Allen
        puts "I am second #{real_name}"  # implicit use of `self` keyword (using attr macro here specifically attr_reader)
        puts "I am third #{@real_name}"  # directly accessing instance variable
        # puts "I am fourth #{self.@real_name}"  # not going to work b/c @real_name is an instance variable, not a method
    end

    # instance method
    def announce_hero_name
        binding.pry
        "I am #{@hero_name}"
    end

    # getter method for accessing a superhero's hero_name
    # def hero_name
    #     @hero_name
    # end

    # def real_name
    #     @real_name
    # end

    # def power
    #     @power
    # end

    # setter method for changing a superhero's power
        # flash.power = ("Runs fast and time travels")
    # def power=(new_power)
    #     @power=new_power
    # end
    
    # def real_name=(new_real_name)
    #     @real_name=new_real_name
    # end

    # def hero_name=(new_hero_name)
    #     @hero_name=new_hero_name
    # end

    private # any method below this keyword will be private

    def announce_real_name
        "I am #{@real_name}"
    end
end

flash = Superhero.new("The Flash", "Barry Allen", "Run fast") # create a new superhero
flash.hero_name  # "The Flash"
flash.power = ("Runs fast and time travels")  # changes prev power to new power
flash.announce_hero_name  # "I am The Flash"
flash.announce_real_name  # NoMethodError: private method `announce_real_name'

iron_man = Superhero.new("Iron Man", "Tony Stark", "Money and Intellect")
iron_man.announce_hero_name  # "I am Iron Man"

Superhero.all # [flash_instance_object, iron_man_instance_object]

binding.pry
