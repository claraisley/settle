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
  User.create!(first_name: "Dwight", last_name: "Shrute", email: "dwight@gmail.com", password: "123123")

  #INTERESTS
  pet_interest = Interest.create!(name: "pet_name", question: "Do you have any pets?", question_field: "Type the name of your pet here")
  friend_name = Interest.create!(name: "friend_name", question: "Will you give us the first name of someone you're close with?", question_field: "Type the name here")
  hobby = Interest.create!(name: "hobby", question: "Do you have any hobbies?", question_field: "Type the hobby here")
  sport = Interest.create!(name: "sport", question: "Do you play any or watch any sports?", question_field: "Type the name of the sport here")
 
  #USER INTERESTS
  UserInterest.create!(user: User.first, interest: Interest.first, value: "Charlie")
  
  #THINKING TRAPS

  catastrophizing = ThinkingTrap.create!(
    name: "Catastrophizing", 
    example_statement1: "'I will fail this test and then fail my course.'", 
    example_statement2: "'When I get to the test I'm going to completely blank and everyone around me will notice.'", 
    text: "Catastrophizing is when we imagine that the worst possible scenerio is about to happen. Not only does our brain jumps to the worst possible outcome, we also predict that we wont be able to cope when it happens. But, the imagined worst-case scenario usually never happens and even if it did, we are most likely able to cope with it. We can also catastrophize a current situtation by believing that something is far worse than it actually is. Either way, these are irrational thoughts involving the belief that you’re in a worse situation than you really are.",
    definition: "Catastrophizing is when we assume the worst possible scenerio will happen."
    )
  filtering = ThinkingTrap.create!(
    name: "Filtering",
    example_statement1: "'I left 3 questions blank, my mark will be horrible.'",
    example_statement2: "'Who cares if I did great on my english test, my math test will still go poorly.'",
    text: "When we fall into the thinking trap of Filtering, we pay attention only to the negative aspects and ignore all the positive ones. It's hard to have balanced thoughts if you only focus on the negative. You are more than your test anxiety and there are many good things about you!",
    definition: "Filtering involves only paying attention to the negative aspects of a situation while ignoring all the positive"
  )
  fortune_telling = ThinkingTrap.create!(
    name: "Fortune-telling",
    example_statement1: "'I know I’ll mess up.'",
    example_statement2: "'I'm going to fail the math test.'",
    text: "Fortune-telling is a type of thinking error where we predict something negative will happen without realistically considering the real odds of the situation. We assume that some event or events will end badly for us, but in reality, we cannot predict the future because we don’t have a magic ball!",
    definition: "Fortune-telling is thinking trap where we predict that things will turn out badly without realistically considering the evidence adn odds in a situation. "
  )
  mind_reading = ThinkingTrap.create!(
    name: "Mind-reading",
    example_statement1: "'Everyone will think I'm stupid.'",
    example_statement2: "'My teacher doesn't like me.'",
    text: "When you think you know a person’s intentions or thoughts, you are falling into the thinking trap known as Mind-reading. You assume people will focus your flaws and believe their negative responses are your fault, even though their response might have nothing to do with you at all.",
    definition: "Fortune-telling is thinking trap where we believe that we know what others are thinking and we assume that they are thinking the worst of us."
  )
  black_white = ThinkingTrap.create!(
    name: "Black-and-white thinking",
    example_statement1: "'If I don't do get a good mark on this test I will totally fail.'",
    example_statement2: "'I planned to study for 6 hours but could only study for 4, now there is no way I will pass.",
    text: "Black-and-white thinking occurs when we only look at situations in terms of extremes: things are either good or bad, a success or a failure - it's all or nothing. For example, if you do something in a way that is less than perfect, you automatically see yourself as a failure. In reality, most outcomes fall in between absolute perfection and complete disaster.'",
    definition: "When we constantly think of things in extreme terms, such as “always” and “never” we are fall into the trap of Black-and-white thinking."
  )
  over_gen = ThinkingTrap.create!(
    name: "Over-generalization",
    example_statement1: "'I always fail tests or exams.'",
    example_statement2: "'I never succeed in school.'",
    text: "Over-generalization occurs when we draw conclusions based on just one example. After interviewing for a job and not getting it, we might overgeneralize by thinking we’ll never get a job. Although common, this thinking error is highly inaccurate and very limiting and usually involves words like 'always' and 'never'.",
    definition: "Over-generalization occurs when we inaccurately conclude that one negative event puts us in a never-ending pattern of defeat. One failed test becomes 'I always fail tests'."
  )
  should = ThinkingTrap.create!(
    name: "Should-statements",
    example_statement1: "'I should stop worrying about my tests.'",
    example_statement2: "'I shouldn't have text anxiety.'",
    text: "Should-statements are thinking errors involving telling yourself how you 'should', 'must', or 'ought' to feel and behave. They may seem like thoughts meant to motivate us, but in reality they often become unrealistic internal rules, leaving us dissapointed and frustrated in overselves when they aren't followed. We can work towards goals without putting extra pressure on ourselves by avoiding using words like 'should' and 'must'.",
    definition: "Should-statements are a common thinking trap where we tell ourselves how we “should”, “must”, or “ought” to feel and behave. In reality they often leave us anxious and dissapointed in ourselves."
  )


  #QUESTIONS/AKA THOUGHTS
  q1 = Thought.create!(interest: pet_interest, text: "If I mess this test up, will petName be there for me when I get home?")
  q2 = Thought.create!(interest: NIL, text: "People can tell when I am feeling anxious.")
  q3 = Thought.create!(interest: NIL, text: "Am I 100% sure you will fail this test?")
  q4 = Thought.create!(interest: NIL, text: "Is this test a hassle or a horror for me?")
  q5 = Thought.create!(interest: NIL, text: "I always fail tests and exams.")
  q6 = Thought.create!(interest: NIL, text: "If I don't get a good mark on this test, I am going to fail the course.")
  q7 = Thought.create!(interest: NIL, text: "I shouldn't have test anxiety.")
  q8 = Thought.create!(interest: NIL, text: "My teacher doesn't like me.")
  q9 = Thought.create!(interest: NIL, text: "I shouldn't run out of time when doing a test.")
  q10 = Thought.create!(interest: friend_name, text: "If my mark on this test is 'bad', my teacher, friends and classmates will think I am stupid.")
  q11 = Thought.create!(interest: friend_name, text: "Will friendName still hangout with me if I mess this test up?")

  ###############################################################################################
  # RESPONSES
  #q1 responses
  r1 = Response.create!(
    thought: q1,
    thinking_trap: filtering,
    value: 0,
    text: "Yes, petName loves me no matter what."
  )
  r2 = Response.create!(
    thought: q1,
    thinking_trap: filtering,
    value: 1,
    text: " petName doesn't show much affection but I don't think they would care."
  )
  r3 = Response.create!(
    thought: q1,
    thinking_trap: filtering,
    value: 3,
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
    text: "No, I can't know that for sure. "
  )
  r8 = Response.create!(
    thought: q3,
    thinking_trap: fortune_telling,
    value: 2,
    text: "No, but what if I do this time?"
  )
  r9 = Response.create!(
    thought: q3,
    thinking_trap: fortune_telling,
    value: 5,
    text: "Yes, I will defintely 100% fail."
  )

  #q4 responses
  r10 = Response.create!(
    thought: q4,
    thinking_trap: catastrophizing,
    value: 0,
    text: "Hassle."
  )
  r11 = Response.create!(
    thought: q4,
    thinking_trap: catastrophizing,
    value: 3,
    text: "Horror."
  )
  r12 = Response.create!(
    thought: q4,
    thinking_trap: catastrophizing,
    value: 1,
    text: "Both."
  )

  #q5 responses
  r13 = Response.create!(
    thought: q5,
    thinking_trap: over_gen,
    value: 0,
    text: "No, I don't always fail tests/exams."
  )
  r14 = Response.create!(
    thought: q5,
    thinking_trap: over_gen,
    value: 2,
    text: "I don't always fail...but this time I might."
  )
  r15 = Response.create!(
    thought: q5,
    thinking_trap: over_gen,
    value: 5,
    text: "Yes, I always fail."
  )

  #q6 responses
  r16 = Response.create!(
    thought: q6,
    thinking_trap: black_white,
    value: 1,
    text: "I can't say for sure but it's possible I will fail completely. "
  )
  r17 = Response.create!(
    thought: q6,
    thinking_trap: black_white,
    value: 2,
    text: "Yes, by failing the test I have totally failed. "
  )
  r18 = Response.create!(
    thought: q6,
    thinking_trap: black_white,
    value: 0,
    text: "No, I don't think one test will make or break my mark. "
  )

  #q7
  r19 = Response.create!(
    thought: q7,
    thinking_trap: should,
    value: 1,
    text: "I wish I didn't have it, but it's not up to me. "
  )
  r20 = Response.create!(
    thought: q7,
    thinking_trap: should,
    value: 3,
    text: "It's not fully my fault but I shouldn't have it."
  )
  r21 = Response.create!(
    thought: q7,
    thinking_trap: should,
    value: 5,
    text: "True, it's embarassing and I shouldn't have it."
  )
  
  #q8 responses
  r22 = Response.create!(
    thought: q8,
    thinking_trap: mind_reading,
    value: 2,
    text: "True, my teacher thinks poorly of me."
  )
  r23 = Response.create!(
    thought: q8,
    thinking_trap: mind_reading,
    value: 0,
    text: "I can't say for sure what my teacher thinks of me."
  )
  r24 = Response.create!(
    thought: q8,
    thinking_trap: mind_reading,
    value: 1,
    text: "I'm not sure but I wouldn't be surprised."
  )

  #q9 responses

  r25 = Response.create!(
    thought: q9,
    thinking_trap: should,
    value: 1,
    text: "Ideally yes, I should finish before the times ends. "
  )
  r26 = Response.create!(
    thought: q9,
    thinking_trap: should,
    value: 0,
    text: "I will try my best to finish the test in the alloted time. "
  )
  r27 = Response.create!(
    thought: q9,
    thinking_trap: should,
    value: 4,
    text: "I shouldn't struggle the way I do with finishing tests in time. "
  )

  #q10 responses
  r28 = Response.create!(
    thought: q10,
    thinking_trap: mind_reading,
    value: 0,
    text: "No, even if this test doesn't go my way the teacher won't see that it as a reflection of my full capabilities.  "
  )
  r29 = Response.create!(
    thought: q10,
    thinking_trap: mind_reading,
    value: 2,
    text: "My teacher may think I am incapable if I don't do well."
  )
  r30 = Response.create!(
    thought: q10,
    thinking_trap: mind_reading,
    value: 5,
    text: "Yes, my teacher will think I am stupid and maybe they are right. "
  )

  #q11 responses

  r31 = Response.create!(
    thought: q11,
    thinking_trap: catastrophizing,
    value: 0,
    text: "Yes, friendName doesn't care about that."
  )
  r32 = Response.create!(
    thought: q11,
    thinking_trap: catastrophizing,
    value: 2,
    text: "Yes, but I doubt I'll be in the mood to even hangout soon thanks to this test."
  )
  r33 = Response.create!(
    thought: q11,
    thinking_trap: catastrophizing,
    value: 5,
    text: "No, they won't want to."
  )

  ###############################################################################################
  #FOLLOWUPS
  #q1 followups
  f1 = FollowUp.create!(
    response: r1,
    thinking_trap: filtering,
    text:" petName does love you no matter what! The test is a hassle and will be over soon. Remind yourself: “I’m strong enough to do this test. I will do my best.” "
  )
  f2 = FollowUp.create!(
    response: r2,
    thinking_trap: filtering,
    text:"Fair enough, not every pet will greet their owner at door. The test is a hassle but remind yourself of the following: “I’m strong enough to do this test. I will do my best.” "
  )
  f3 = FollowUp.create!(
    response: r3,
    thinking_trap: filtering,
    text:"If your pet could understand the situation I don't think they would agree. You are more than your test results. This type of thinking could fall under Filtering, you are focusing on the bad over the good. A more balanced conclusion could include the following: There are good things in my life like petName, this upcoming test does not out weight those things."
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

  #q4 followups
  f10 = FollowUp.create!(
    response: r10,
    thinking_trap: catastrophizing,
    text:"Taking a test is definitely a hassle. Many students experience some nervousness or apprehension before, during, or even after an exam. It is perfectly natural to feel some anxiety! Think of an activity or event you are looking forward to, by finishing the test you will be one step closer to that!"
  )
  f11 = FollowUp.create!(
    response: r11,
    thinking_trap: catastrophizing,
    text:"Are you falling into a thinking trap? Catastrophizing leads us to think everything is an extreme, we don't like tests so therefore they are a horror. Test anxiety is annoying and not easy to deal with, but if we think of it as just a hassle, something that gets in the way, then it becomes more manageable and realistic."
  )
  f12 = FollowUp.create!(
    response: r12,
    thinking_trap: catastrophizing,
    text:"Are you falling into a thinking trap? Catastrophizing leads us to think everything is an extreme, we don't like tests so therefore they are a horror. Test anxiety is annoying and not easy to deal with, but if we think of it as just a hassle, something that gets in the way, then it becomes more manageable and realistic."
  )

  #q5 followups
  f13 = FollowUp.create!(
    response: r13,
    thinking_trap: over_gen,
    text:"It's hard not to get down on ourselves after being disspointed with our performance on a test or exam, but by recognizing the statement 'I always fail' as unrealistic you are already being kind to yourself and that's an awesome thing. Keep resisting the trap of Over-generalization and remind yourself: 'I’m strong enough to do this test. I will do my best.'"
  )
  f14 = FollowUp.create!(
    response: r14,
    thinking_trap: over_gen,
    text:"You have passed many school assignments and tests before and you can't know for sure you won't pass this one. Resist Over-generalization and try to avoid using words like 'always' and 'never' when talking about yourself. Take a moment to be kind to yourself: 'These anxious feelings will pass.' 'The test won’t last long, and I know I can cope.'"
  )
  f15 = FollowUp.create!(
    response: r15,
    thinking_trap: over_gen,
    text:"Using words like 'always' or 'never' can be a sign that you are falling into the trap of Over-generalization. These thoughts don't help us in the long run because they don't take the full picture into account. It's very unlikely and unrealistic that you acutally always fail at tests. To begin pushing back against these irrational thoughts start by trying to catch yourself using words like 'always' and 'never' - almost like putting a mental flag up."
  )

  #q6 followups
  f16 = FollowUp.create!(
    response: r16,
    thinking_trap: black_white,
    text:"Black-and-white thinking is a common defence mechanism where a person views things in extreme ways: things are ALL good or ALL bad. Seeing things as all-or-nothing prevents us from having a balanced, realistic outlook on the world. It's much more likely that even if you didn't pass this test you will still be able to pass the course. The reality is that course marks flucuate and many teachers even provide additional assignments to boost your mark."
  )
  f17 = FollowUp.create!(
    response: r17,
    thinking_trap: black_white,
    text:"When we look at circumstances in terms of extremes, we get caught in the pitfall of Black-and-white Thinking - we think things are ALL good or ALL bad. Let's step to the side and start to think about our thinking: How did you come to the conclusion that you will totally fail? Maybe you won't pass, but are you sure that means you fail the course completely? Isn't it more likely that your mark will decrease but not enough to truly fail? In reality very situations fall under the 'all-or-nothing' category. The reality is that course marks flucuate and many teachers even provide additional assignments to boost your mark."
  )
  f18 = FollowUp.create!(
    response: r18,
    thinking_trap: black_white,
    text:"Exactly, it's very rare that one test could decide everything. The reality is that course marks flucuate and many teachers even provide additional assignments to boost your mark. "
  )

  #q7 followups
  f19 = FollowUp.create!(
    response: r19,
    thinking_trap: should,
    text:"It's normal to be frustrated when dealing with unwanted anxiety, it's not easy! Test anxiety is very common among students and it's nothing to be embarassed about. By continuing to challenge negative thoughts you are working towards a goal to make your future self feel better!"
  )
  f20 = FollowUp.create!(
    response: r20,
    thinking_trap: should,
    text:"When we make statments to ourselves about how things are suppose to be - how we 'ought' to act or feel, we are falling into the common negative thinking pattern called Should-statements. Should-statements often leave us feeling frustrated and dissapointed with oursleves. Let's challenge that line of thinking: Do you think that being strict and demanding will motivate you or others? Probably not right? Be kind to yourself and avoid using statements with the words 'should' and 'must'."
  )
  f21 = FollowUp.create!(
    response: r21,
    thinking_trap: should,
    text:"When we make statments to ourselves about how things 'ought' to be, we fall into negative thinking pattern called Should-statements. It's natural to want to motivate yourself but these thoughts often actually leave us feeling frustrated and dissapointed with oursleves. Students who experience test anxiety often use Should-statements to describe their symptoms but in reality, test anxiety is very common among students and there's no reason to be embarassed about it. Do you think that being strict and demanding will motivate you or others? Probably not right? In the future see if you can make a mental flag when you tell yourself how things 'should' be."
  )

  #q8 followups
  f22 = FollowUp.create!(
    response: r22,
    thinking_trap: mind_reading,
    text:"Mind-reading is common negative thinking error where we believe we know what others are thinking. Here you are assuming your teacher thinks the worst of you. Regardless of your relationship with your teacher, you can't know for sure what they are thinking. You are being too hard on yourself when you assume your teacher thinks the worst. Remind yourself that you can't really know a person’s intentions or thoughts. It's natural to want to take things personally but in reality someone's negative reaction often times has nothing to do with you."
  )
  f23 = FollowUp.create!(
    response: r23,
    thinking_trap: mind_reading,
    text:"You are right, you can't know for sure the thoughts and intentions of another person. Remember: it's natural to want to take things personally but in reality someone's negative reaction often times has nothing to do with you."
  )
  f24 = FollowUp.create!(
    response: r24,
    thinking_trap: mind_reading,
    text:"Mind-reading is common negative thinking error where we believe we know what others are thinking and we assume they are thinking the worst of us. Regardless of your relationship with your teacher, you can't know for sure their thoughts and intentions. Ask yourself: How do you know that? Does assuming something make it true? Remember: it's natural to want to take things personally but someone's negative reaction often times has nothing to do with you."
  )

  #q9 followups
  f25 = FollowUp.create!(
    response: r25,
    thinking_trap: should,
    text:"It's natural and healthy to want to move towards a goal like finishing your tests in the alloted time. But a problem starts when motivating statements become internal rules. A common thinking error, Should-statements cause us stress by laying out rules we 'must' follow, leaving us disspointed with ourselves when we don't live up to them. We can still work towards a goal, just without all the negative self-talk! Try and spot the next time you hear yourself use a Should-statement."
  )
  f26 = FollowUp.create!(
    response: r26,
    thinking_trap: should,
    text:"Great job on being kind to yourself. It's natural and healthy to want to move towards a goal like finishing your tests in the alloted time. The reality is we can work on this goal while still being kind to ourselves and not using words like 'shoud' and 'must'."
  )
  f27 = FollowUp.create!(
    response: r27,
    thinking_trap: should,
    text:"When we have a goal like finishing a test in the alloted time, it's understandable that we become frustrated with ourselves when we aren't succeeding. A problem starts though when our motivating statements become internal rules. A common thinking trap, Should-statements cause us stress by laying out rules we 'must' follow, leaving us disspointed with ourselves when we don't live up to them. Let's rework your should statement and create a more balanced one. 'I shouldn't struggle the way I do with finishing tests in time' becomes 'I'd like to finish my tests on time, but I know that sometimes it isn't possible'. See if you can spot the next time you hear yourself use a Should-statement and if you can rework it to a more realistic thought."
  )

  #q10 followups

  f28 = FollowUp.create!(
    response: r28,
    thinking_trap: mind_reading,
    text:"You're right, your teacher will definitely not be thinking this of you, especially not after one bad outcome. It's natural to be worried what others think but in reality you can't know for sure the thoughts and intentions of another person, including your teacher. "
  )
  f29 = FollowUp.create!(
    response: r29,
    thinking_trap: mind_reading,
    text:"Are you basing this on facts or feelings? What solid evidence would you give that supports the idea that your teacher will think this? Resist the trap of Mind-reading - you can't know for sure the thoughts and intentions of another person, including your teacher and classmates. Remember: you've prepared for this test and have passed other tests at school before."
  )
  f30 = FollowUp.create!(
    response: r30,
    thinking_trap: mind_reading,
    text:"Woah! That's not a very nice thing to say to yourself. What would you say to friendName if they said the same thing about themselves. When we fall into the trap of Mind-reading, not only do we wrongly believe we know what others are thinking, but we assume they think they are thinking the worst of us. Your teacher will not think you are stupid if you do poorly. They might be concerned but not mad, and will most likey only want to help. Try not to assume the worst of your classmates, everyone experiences an academic struggle at some point and they can probably relate. Be kind to yourself!"
  )

  #q11 followups

  f31 = FollowUp.create!(
    response: r31,
    thinking_trap: catastrophizing,
    text:"I'm sure friendName would agree! Close friends support you and like you for who you are, the outcome of this test does not affect that."
  )
  f32 = FollowUp.create!(
    response: r32,
    thinking_trap: catastrophizing,
    text:"What better way to forget about how a test went than to hang out with a friend? One of the quickest ways to change your mood is to socialize with other who support you. Would you be there for friendName after a test?"
  )
  f33 = FollowUp.create!(
    response: r33,
    thinking_trap: catastrophizing,
    text:"friendName wouldn't be your friend if they cared about stuff like that. Sometimes we talk to ourselves in a mean way. This kind of thinking is unhelpful and unfair. Close friends support you and like you for who you are, the outcome of this test will not affect that."
  )







#################################################################################################
#TIPS FOR TEST SUCCESS
  Tip.create!(name: "DO", 
    text: "Do reward yourself after the test with your favourite food, movie or some other treat!"
    )
  Tip.create!(name: "DON'T", 
    text: "Don't spend your time before a test with classmates who generate stress for you."
    )
  Tip.create!(name: "DO", 
    text: "Do start studying for the test in advance. Budget your time so you are well prepared for the test."
    )
  Tip.create!(name: "DON'T", 
    text: "Don't spend the hour before the test cramming, grab a bite to eat and do one of Settle's meditations or work-throughs instead."
    ) 
  Tip.create!(name: "DO", 
    text: "Do eat a light meal before a test. Having food in your stomach will give you enery and keep you focused."
    )
  Tip.create!(name: "DON'T", 
    text: "Don't stay up late studying the night before a test. A lack of sleep can increase anxious thoughts and only make things worse."
    )
  Tip.create!(name: "DO", 
    text: "Do tell yourself that you will do your best on the test, and that will be enough! "
    )
  Tip.create!(name: "DON'T", 
    text: "Don't skip the class right before the test - it's a prime time for the instructor to give out hints or the format of the test. "
    )
  Tip.create!(name: "DO", 
    text: "Do remind yourself that the test is only a test."
    )
  Tip.create!(name: "DON'T", 
    text: "Don't spend too much time on one question. Answer the easy questions first. This will give you the confidence and momentum to get through the rest of the test.  "
    )   



#################################################################################################
#REEFLECTIONS AND MOODS FOR ANALYTICS SECTIONS
  Reflection.create!(user_id: 2, 
    created_at: Date.new(2020, 2, 1)
    )
  Reflection.create!(user_id: 2, 
    created_at: Date.new(2020, 2, 2)
    )
  Reflection.create!(user_id: 2, 
    created_at: Date.new(2020, 2, 4)
    )
  Reflection.create!(user_id: 2, 
    created_at: Date.new(2020, 2, 5)
    )  
  Reflection.create!(user_id: 2, 
    created_at: Date.new(2020, 2, 7)
    )
  Reflection.create!(user_id: 2, 
    created_at: Date.new(2020, 2, 10)
    )
  Reflection.create!(user_id: 2, 
    created_at: Date.new(2020, 2, 14)
    )
  Reflection.create!(user_id: 2, 
    created_at: Date.new(2020, 2, 15)
    )
  Reflection.create!(user_id: 2, 
    created_at: Date.new(2020, 2, 18)
    )
  Reflection.create!(user_id: 2, 
    created_at: Date.new(2020, 2, 22)
    )
  Reflection.create!(user_id: 2, 
    created_at: Date.new(2020, 2, 24)
    )
  Mood.create!(reflection_id: 1,
    value: 2, 
    created_at: Date.new(2020, 2, 1)
    )
  Mood.create!(reflection_id: 2,
    value: 3, 
    created_at: Date.new(2020, 2, 2)
    )
  Mood.create!(reflection_id: 3,
    value: 5, 
    created_at: Date.new(2020, 2, 4)
    )
  Mood.create!(reflection_id: 4,
    value: 1, 
    created_at: Date.new(2020, 2, 5)
    )  
  Mood.create!(reflection_id: 5,
    value: 2, 
    created_at: Date.new(2020, 2, 7)
    )
  Mood.create!(reflection_id: 6,
    value: 3, 
    created_at: Date.new(2020, 2, 10)
    )
  Mood.create!(reflection_id: 7,
    value: 5, 
    created_at: Date.new(2020, 2, 14)
    )
  Mood.create!(reflection_id: 8,
    value: 4, 
    created_at: Date.new(2020, 2, 15)
    )
  Mood.create!(reflection_id: 9,
    value: 1, 
    created_at: Date.new(2020, 2, 18)
    )
  Mood.create!(reflection_id: 10,
    value: 2,
    created_at: Date.new(2020, 2, 22)
    )
  Mood.create!(reflection_id: 11,
    value: 3,
    created_at: Date.new(2020, 2, 24)
    )
  
    
  #### MEDITATIONS AND USER MEDITATIONS
  Meditation.create!(name: "Good Enough", time_in_minutes: 2, URL: "https://res.cloudinary.com/dpfixnpii/video/upload/v1582394111/Good_Enough_-_1_Minute_30_Seconds_lphc1x.mp4")
  Meditation.create!(name: "Fine Right Now", time_in_minutes: 2, URL: "https://res.cloudinary.com/dpfixnpii/video/upload/v1582394078/Fine_Right_Now_-_2_minutes_jy8v9k.mp4")
  Meditation.create!(name: "Trust Yourself", time_in_minutes: 6, URL: "https://res.cloudinary.com/dpfixnpii/video/upload/v1582394145/Trust_Yourself_-_6_minutes_wssty0.mp4")
  Meditation.create!(name: "Set Yourself Up For Sucess", time_in_minutes: 9, URL: "https://res.cloudinary.com/dpfixnpii/video/upload/v1582394130/Set_Yourself_Up_For_Success_-_9_Minutes_d9lsxw.mp4")

  UserMeditation.create!(user: User.first, meditation_id: 1)
  UserMeditation.create!(user: User.first, meditation_id: 2)
  UserMeditation.create!(user: User.first, meditation_id: 2)
  UserMeditation.create!(user: User.first, meditation_id: 3)
  UserMeditation.create!(user: User.first, meditation_id: 3)

end  
