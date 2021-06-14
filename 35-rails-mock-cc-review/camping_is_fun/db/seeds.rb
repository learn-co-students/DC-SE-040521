# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Signup.destroy_all
Camper.destroy_all
Activity.destroy_all



Camper.create(name: 'Caitlin',age: 8)
Camper.create(name: 'Lizzie', age: 9)
Camper.create(name: 'Tom', age: 12)
Camper.create(name: 'Morgan', age: 15)
Camper.create(name: 'Danny',age: 11)
Camper.create(name: 'Peter',age: 10)
Camper.create(name: 'Amanda',age: 9)
Camper.create(name: 'Nick',age: 12)


Activity.create(name: 'Archery', difficulty: 2)
Activity.create(name: 'Swimming', difficulty: 3)
Activity.create(name: 'Photography', difficulty: 2)
Activity.create(name: 'Arts & Crafts', difficulty: 5)
Activity.create(name: 'Kayaking', difficulty: 3)
Activity.create(name: 'Fencing', difficulty: 4)
Activity.create(name: 'Canoeing', difficulty: 3)
Activity.create(name: 'Windsurfing', difficulty: 5)


# uncomment below to generate 50 join table instances
50.times do 
  Signup.create(camper_id: Camper.all.sample.id, activity_id: Activity.all.sample.id, time: rand(0..24))
end 






