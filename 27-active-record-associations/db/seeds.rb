# delete all plants, people, and plant parenthoods from their respective tables
Plant.destroy_all
Person.destroy_all
PlantParenthood.destroy_all

# reset the ids so they start at 1
Plant.reset_pk_sequence
Person.reset_pk_sequence
PlantParenthood.reset_pk_sequence


plant1 = Plant.create(color: "yellow", name: "sunflower", bought: 20210524)
plant2 = Plant.create(color: "purple", name: "tulip", bought: 20210505)

person1 = Person.create(name: "Big Bird", free_time: "variable", age: 40)
person2 = Person.create(name: "Doc McStuffins", free_time: "none", age: 5)

plant_parenthood1 = PlantParenthood.create(favorite: true, person_id: person1[:id], plant_id: plant1.id)
plant_parenthood2 = PlantParenthood.create(favorite: false, person_id: person2.id, plant_id: plant2.id)
plant_parenthood3 = PlantParenthood.create(favorite: false, person_id: person1.id, plant_id: plant2.id)

puts "successfully seeded database 😄"