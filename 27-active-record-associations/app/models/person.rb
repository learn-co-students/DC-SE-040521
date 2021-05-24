class Person < ActiveRecord::Base
    has_many :plant_parenthoods

    has_many :plants, through: :plant_parenthoods


    # line 2 is accomplishing the same as the below method
    # def plant_parenthoods
    #     PlantParenthood.all.select {|pp| pp.person == self}
    # end

    def custom_method
        plants.each do |plant|
            puts "#{plant.name} is #{plant.color}"
        end
    end
end
