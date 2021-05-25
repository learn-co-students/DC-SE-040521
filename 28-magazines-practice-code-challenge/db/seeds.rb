puts "Clearing old data..."
Magazine.destroy_all
Reader.destroy_all
Subscription.destroy_all

puts "Seeding magazines..."
magazines = ["The New Yorker", "National Geographic", "Wired", "People", "Cosmopolitan", "Time", "US Weekly", "New York Magazine"]
# Create sample magazines
magazines.each do |magazine|
  Magazine.create(title: magazine)
end

puts "Seeding readers..."
# Create 10 random Readers
10.times do
  Reader.create(name: Faker::Name.name, email: Faker::Internet.email)
end

puts "Seeding subscriptions..."
# Create 20 random subscriptions
20.times do
  # Get a reader instance:
  reader_id = Reader.ids.sample
  # Get a magazine instance:
  magazine_id = Magazine.ids.sample
  # Get a random price between 10 and 100:
  price = rand(10..100)

  # TODO: create subscriptions! Remember, a subscription belongs to a reader
  # and a subscription belongs to a magazine.
  Subscription.create(reader_id: reader_id, magazine_id: magazine_id, price: price)
  
end

puts "Done!"