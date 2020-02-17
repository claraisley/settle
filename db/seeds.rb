# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  User.create(first_name: "Katherine", last_name: "Szelag", email: "katherine.szelag@alum.utoronto.ca", password: '123123123' , password_confirmation: '123123123')
  
  
  pet_interest = Interest.create!(name: "pet_name", question: "Do you have any pets?")
  friend_name = Interest.create!(name: "friend_name", question: "Mind giving me the first name of one of your close friends.")
  hobby = Interest.create!(name: "hobby", question: "Fill in the blank with a hobby of yours: I like to ")
  sport = Interest.create!(name: "sport", question: "Do you play any or watch any sports? (If yes, type the name of one here)")
 
  
  UserInterest.create!(user: User.first, interest: Interest.first, value: "Charlie")
  
  
  q1 = Thought.create!(interest: pet_interest, text: "If I mess this test up, will [pet name] be there for me when I get home?")
  q2 = Thought.create!(interest: NIL, text: "People can tell when I am feeling anxious.")
  
  catastrophizing = ThinkingTrap.create!(
    name: "Catastrophizing", 
    example_statement1: "I will fail this test and then fail my course.", 
    example_statement2: "When I get to the test I'm going to completely blank and everyone around me will notice.", 
    text: "Catastrophizing is when we imagine that the worst possible scenerio is about to happen. Not only does our brain jumps to the worst possible outcome, we also predict that we wont be able to cope when it happens. But, the imagined worst-case scenario usually never happens and even if it did, we are most likely able to cope with it. We can also catastrophize a current situtation by believing that something is far worse than it actually is. Either way, these are irrational thoughts involving the belief that you’re in a worse situation than you really are.",
    definition: "Catastrophizing is when someone assumes that the worst will happen."
    )
  filtering = ThinkingTrap.create!(
    name: "Filtering",
    example_statement1: "I left 3 questions blank, my mark will be horrible",
    example_statement2: "Who cares if I did great on my english test, my math test will still go poorly.",
    text: "When we fall into the thinking trap of Filtering, we pay attention only to the negative aspects and ignore all the positive ones. It's hard to have balanced thoughts if you only focus on the negative. You are more than your test anxiety and there are many good things about you!",
    definition: "Filtering involves only paying attention to the negative aspects of a situation while ignoring all the positive"
  )

  # RESPONSES
  r1 = Response.create!(
    thought: q1,
    thinking_trap: filtering,
    value: 0,
    text: "Yes, [pet name] loves me no matter what."
  )
  r2 = Response.create!(
    thought: q1,
    thinking_trap: filtering,
    value: 1,
    text: "[pet name] doesn't show much affection but I don't think they would care."
  )
  r3 = Response.create!(
    thought: q1,
    thinking_trap: filtering,
    value: 2,
    text: "No, they'll be upset if I fail the test."
  )
  

  r4 = Response.create!(
    thought: q2,
    thinking_trap: catastrophizing,
    value: 2,
    text: "Yes, everyone will know I'm freaking out. "
  )
  r5 = Response.create!(
    thought: q2,
    thinking_trap: catastrophizing,
    value: 1,
    text: "Probably not."
  )
  r6 = Response.create!(
    thought: q2,
    thinking_trap: catastrophizing,
    value: 0,
    text: "No, people will be busy with their own test. "
  )
  
  
  
  f1 = FollowUp.create!(
    response: r1,
    thinking_trap: filtering,
    text:"[pet name] does love you no matter what! The test is a hassle and will be over soon. Remind yourself: “I’m strong enough to do this test. I will do my best.” "
  )
  f2 = FollowUp.create!(
    response: r2,
    thinking_trap: filtering,
    text:"Fair enough, not every pet will greet their owner at door. The test is a hassle but remind yourself of the following: “I’m strong enough to do this test. I will do my best.” "
  )
  f3 = FollowUp.create!(
    response: r3,
    thinking_trap: filtering,
    text:"If your pet could understand the situation I don't think they would agree. You are more than your test results. This type of thinking could fall under Filtering, you are focusing on the bad over the good. A more balanced conclusion could include the following: There are good things in my life like [pet name], this upcoming test does not out weight those things."
  )
  
  f4 = FollowUp.create!(
    response: r4,
    thinking_trap: catastrophizing,
    text:" We can agree that before and during the test you may feel anxious, and that's totally normal - t’s OK that you are anxious. But people around you cannot read your mind, you classmates and teacher will NOT know you are anxious. Resist the urge to fall into the Catastrophizing thinking trap, the worst-case-scenerio you imagined will not happen. Repeat this thought in your head as many times as you need: 'People around me cannot tell when I feel anxious.'"
  )
  f5 = FollowUp.create!(
    response: r5,
    thinking_trap: catastrophizing,
    text:" It is perfectly normal to feel anxious going into a test, but people around you cannot read your mind. Your classmates and teacher will NOT know you are anxious. Repeat this thought in your head as many times as you need: 'People around me cannot tell when I feel anxious.'"
  )
  f6 = FollowUp.create!(
    response: r6,
    thinking_trap: catastrophizing,
    text:"You are right, people cannot tell when you are feeling anxious. Great job on being kind to yourelf. Keep challenging the anxious thoughts with these coping statements: 'I have taken many tests in my life, I know I can hanlde this.' 'My anxiety won't last forever' "
  )
  
  
  Tip.create!(name: "do", 
    text: "Do reward yourself after the test with your favourite food, movie or some other treat!"
    )
  Tip.create!(name: "don't", 
    text: "Don't spend your time before a test with classmates who generate stress for you."
    )
  Tip.create!(name: "don't", 
    text: "Don't stay up late studying the night before a test. A lack of sleep can increase anxious thoughts and only make things worse."
    )
  Tip.create!(name: "do", 
    text: "Do start studying for the test in advance. Budget your time so you are well prepared for the test."
    )
  Tip.create!(name: "don't", 
    text: "Don't spend the hour before the test cramming, grab a bite to eat and do one of Settle's meditations or work-throughs instead."
    ) 
  Tip.create!(name: "do", 
    text: "Do eat a light meal before a test. Having food in your stomach will give you enery and keep you focused."
    )

end  
