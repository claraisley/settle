# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: "Katherine", last_name: "Szelag", email: "katherine.szelag@alum.utoronto.ca")

Interest.create(name: "pet_name", question: "Do you have any pets?")
Interest.create(name: "friend_name", question: "Mind giving me the first name of one of your close friends.")
Interest.create(name: "hobby", question: "Fill in the blank with a hobby of yours: I like to ")
Interest.create(name: "sport", question: "Do you play any or watch any sports? (If yes, type the name of one here)")

UserInterest.create(user_id: 1, interest_id: 1, value: "Charlie")