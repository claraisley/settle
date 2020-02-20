@user_thoughts = User.where(user_id: 2).interests

@thoughts = Thought.where(interest_id: NIL).to_a

puts @thoughts
puts 

y= User.joins(:user_interests).where(:user_interests => {user_id: 2})