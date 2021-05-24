require_relative "../config/environment"

class Clown
  attr_accessor :name, :age, :fear, :skill

  # def name=(new_name)
  #   @name = new_name
  # end

  def initialize(args_hash)

    args_hash.each do |key, value|
      # binding.pry
      # @key = value <-- this is what we want to happen
      # but need to write the code which will make it happen
      self.send("#{key}=", value)
    end

    # @name = args_hash[:name]
    # @age = args_hash[:age]
    # @fear = args_hash[:fear]
    # @skill = args_hash[:skill]

    binding.pry

  end

end

krusty = Clown.new({name: "Krusty", age: 42, skill: "chainsaws", fear: "balloons"})

binding.pry
