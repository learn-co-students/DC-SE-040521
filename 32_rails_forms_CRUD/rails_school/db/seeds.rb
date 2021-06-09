# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Student.destroy_all

puts "...creating students 👩‍🎓👨‍🎓"

20.times do
    Student.create(name: Faker::Movies::HarryPotter.character, age: rand(11..17), year: rand(1991..1998), quote: Faker::Movies::HarryPotter.quote)
end
