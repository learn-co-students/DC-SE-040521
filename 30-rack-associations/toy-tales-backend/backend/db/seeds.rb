Toy.destroy_all
Car.destroy_all
Lease.destroy_all

toys = [
    {
      name: "Woody",
      image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
      likes: 37
    },
    {
      name: "Buzz Lightyear",
      image: "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
      likes: 15
    },
    {
      name: "Mr. Potato Head",
      image: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawlimage/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
      likes: 3
    },
    {
      name: "Slinky Dog",
      image: "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
      likes: 7
    },
    {
      name: "Rex",
      image: "http://umich.edu/~chemh215/W11HTML/SSG5/ssg5.2/FRex.png",
      likes: 1
    },
    {
      name: "Bo Peep",
      image: "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
      likes: 2
    },
    {
      name: "Little Green Men",
      image: "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
      likes: 0
    },
    {
        name: "Hamm",
        image: "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
        likes: 0
      },
  ]


toys.each do |toy_hash|
    Toy.create(toy_hash)
end

puts "Woody and the gang are all here! 🤠"


car1 = Car.create(make: "Nissan", model: "GTR")
car2 = Car.create(make: "Telsa", model: "X")
car3 = Car.create(make: "Honda", model: "Civic")

puts "Cars are ready to go 🚙💨"

lease1 = Lease.create(year: 1996, toy_id: Toy.first.id, car_id: car3.id)
lease2 = Lease.create(year: 2016, toy_id: Toy.second.id, car_id: car2.id)
lease3 = Lease.create(year: 2007, toy_id: Toy.last.id, car_id: car1.id)

puts "Leases are set 📝"

