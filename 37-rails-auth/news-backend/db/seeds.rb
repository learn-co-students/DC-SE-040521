# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🗑Deleting articles..."

Article.destroy_all

puts "Creating articles..."

articles = [
  {
    title: "Fluff Daddy",
    author: "F. Diddy",
    description: "Breaking: Puff Daddy changes his name yet again, this time to help promote his line of extremely fluffy coats",
    image: "https://i.redd.it/l0uj355oxv341.jpg",
    likes: 50,
  },
  {
    title: "We've had it all wrong",
    author: "Gabriel Iglesias",
    description: "In recent news, scientists discovered that the fluffy animals we've commonly refered to as 'Hamsters' are actually really named 'Hamstars'. History and science books are being updated as we speak.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/1920px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg",
    likes: 9005,
  },
  {
    title: "Fox Runs",
    author: "Raffy",
    description: "This fox is great",
    image: "https://randomfox.ca/images/98.jpg",
    likes: 17,
  },
  {
    title: "Hamsters Rule",
    author: "Raffy",
    description: "Hamster, from the German word hamstern” means hoard, which is a favorite pastime of our hamster friends.",
    image: "https://cdn.mos.cms.futurecdn.net/S62tKo2WjJ8NfU4bPX9GvU-1200-80.jpg",
    likes: 0,
  },
]

articles.each do |article_hash|
  Article.create!(article_hash)
end
