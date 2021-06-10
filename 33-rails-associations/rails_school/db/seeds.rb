# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

StudentTeacher.destroy_all
Student.destroy_all
Teacher.destroy_all

puts "...creating students 👩‍🎓👨‍🎓"

20.times do
    Student.create(name: Faker::Movies::HarryPotter.character, age: rand(11..17), year: rand(1991..1998), quote: Faker::Movies::HarryPotter.quote)
end

puts "...creating teachers 🧙‍♀️🧙‍♂️"

20.times do
    Teacher.create(name: Faker::Movies::HarryPotter.character, tenure: rand(1..50), specialty: Faker::Movies::HarryPotter.spell)
end

puts "...creating classes ✨✨"

class_name = ["Astronomy", "Charms", "Defense Against the Dark Arts", "Herbology", "History of Magic", "Potions", "Transfiguration"]

100.times do
    StudentTeacher.create(name: class_name.sample, location: Faker::Movies::HarryPotter.location, student_id: Student.all.sample.id, teacher_id: Teacher.all.sample.id)
end