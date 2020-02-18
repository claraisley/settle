# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#TRANSCATION MEANS THAT NOT OF THE SEEDS WILL COMPLETE IF AN ERROR OCCURS ANYWHERE
ActiveRecord::Base.transaction do

  #USERS
  User.create!(first_name: "Katherine", last_name: "Szelag", email: "katherine.szelag@alum.utoronto.ca", password: "123456")
  
  #INTERESTS
  pet_interest = Interest.create!(name: "pet_name", question: "Do you have any pets?")
  friend_name = Interest.create!(name: "friend_name", question: "Mind giving me the first name of one of your close friends.")
  hobby = Interest.create!(name: "hobby", question: "Fill in the blank with a hobby of yours: I like to ")
  sport = Interest.create!(name: "sport", question: "Do you play any or watch any sports? (If yes, type the name of one here)")
 
  #USER INTERESTS
  UserInterest.create!(user: User.first, interest: Interest.first, value: "Charlie")
  
  
 
  #THINKING TRAPS

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
  fortune_telling = ThinkingTrap.create!(
    name: "Fortune-telling",
    example_statement1: "I know I’ll mess up.",
    example_statement2: "I'm going to fail the math test",
    text: "Fortune-telling is a type of thinking error where we predict something negative will happen without realistically considering the real odds of the situation. We assume that some event or events will end badly for us, but in reality, we cannot predict the future because we don’t have a magic ball!",
    definition: "Fortune-telling is thinking trap where we predict that things will turn out badly without realistically considering the evidence adn odds in a situation. "
  )
  mind_reading = ThinkingTrap.create!(
    name: "Mind-reading",
    example_statement1: "Everyone will think I'm stupid.",
    example_statement2: "My teacher doesn't like me",
    text: "When you think you know a person’s intentions or thoughts, you are falling into the thinking trap known as Mind-reading. You assume people will focus your flaws and believe their negative responses are your fault, even though their response might have nothing to do with you at all.",
    definition: "Fortune-telling is thinking trap where we believe that we know what others are thinking and we assume that they are thinking the worst of us."
  )
  black_white = ThinkingTrap.create!(
    name: "Black-and-white thinking",
    example_statement1: "If I don't do get a good mark on this test I will totally fail",
    example_statement2: "I planned to study for 6 hours but could only study for 4, now there is no way I will pass.",
    text: "Black-and-white thinking occurs when we only look at situations in terms of extremes: things are either good or bad, a success or a failure - it's all or nothing. For example; if you do something in a way that is less than perfect, you automatically see yourself as a failure. In reality, most outcomes fall in between absolute perfection and complete disaste",
    definition: "When we constantly think of things in extreme terms, such as “always” and “never” we are fall into the trap of Black-and-white thinking."
  )
  over_gen = ThinkingTrap.create!(
    name: "Over-generalization",
    example_statement1: "I always fail tests or exams",
    example_statement2: "I never succeed in school.",
    text: "Over-generalization occurs when we draw conclusions based on just one example. For exmaple after interviewing for a job and not getting it, we might overgeneralize by thinking we’ll never get a job. Although common, this thinking error is highly inaccurate and very limiting and usually involves words like 'always' and 'never'.",
    definition: "Over-generalization occurs when we inaccurately conclude that one negative event puts us in a never-ending pattern of defeat. One failed test becomes 'I always fail tests'."
  )
  should = ThinkingTrap.create!(
    name: "Should-statements",
    example_statement1: "I should stop worrying about my tests.",
    example_statement2: "I shouldn't have text anxiety.",
    text: "Should-statements are thinking errors involving telling yourself how you 'should', 'must', or 'ought' to feel and behave. They may seem like thoughts meant to motivate us, but in reality they often become unrealistic interal rules that leave us dissapointed and frustrated in overselves when they aren't followed. We can work towards goals without putting extra pressure on ourselves by avoiding using words like 'should' and 'must'.",
    definition: "Should-statements are a common thinking trap where we tell ourselves how we “should”, “must”, or “ought” to feel and behave. In reality they often leave us anxious and dissapointed in ourselves."
  )


  #QUESTIONS/AKA THOUGHTS
  q1 = Thought.create!(interest: pet_interest, text: "If I mess this test up, will [pet name] be there for me when I get home?")
  q2 = Thought.create!(interest: NIL, text: "People can tell when I am feeling anxious.")
  q3 = Thought.create!(interest: NIL, text: "Am I 100% sure you will fail this test?")


  # RESPONSES
  #q1 responses
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
  #q2 responses
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
  #q3 responses
  r7 = Response.create!(
    thought: q3,
    thinking_trap: fortune_telling,
    value: 0,
    text: "No, I can't know that for sure, but I think it won't go well. "
  )
  r8 = Response.create!(
    thought: q3,
    thinking_trap: fortune_telling,
    value: 1,
    text: "No, but what if I do this time?"
  )
  r9 = Response.create!(
    thought: q3,
    thinking_trap: fortune_telling,
    value: 2,
    text: "Yes, I will defintely 100% fail."
  )
  #q4 responses

  

  #FOLLOWUPS
  #q1 followups
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
  #q2 followups
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
  #q3 followups
  f7 = FollowUp.create!(
    response: r7,
    thinking_trap: fortune_telling,
    text:"Let's ask ourselves the following: 'Am I basing my judgment on the way I ‘feel’ instead of the ‘facts’?' You might feel like you will perform poorly, but there is no evidence to support it. You prepared for the test, and have passed other tests at school before."
  )
  f8 = FollowUp.create!(
    response: r8,
    thinking_trap: fortune_telling,
    text:"The common thinking trap Fortune-telling falls under the category of jumping to conclusions. You are predicting things will turn out badly but in reality noone can predict the future because we don't have a magic ball. Ask yourself the following: 'What’s the worst that could happen? And if the worst did happen, what could I do to cope with it?' For example your response could be: 'The worst that could happen is I do fail the test. It’ll be disappointing, but it won’t be the end of the world. I can go for extra help to find out what went wrong, and ask my teacher if there is anything I can do to improve my mark.'"
  )
  f9 = FollowUp.create!(
    response: r9,
    thinking_trap: fortune_telling,
    text:"The common thinking trap Fortune-telling falls under the category of jumping to conclusions. You are predicting things will turn out badly but in reality noone can predict the future because we don't have a magic ball. Fortune-telling is not a realistic assessment based on evidence, and it doesn't take into account the real odds of a situation. For example: what facts do you actually have that prove that you will 100% fail? You may be able to come up with lots of reasons that support this thought, but would this evidence hold up in court? Would it make sense to someone else?"
  )




#TIPS FOR TEST SUCCESS
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
