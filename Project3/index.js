const quotes=[
    "The secret of getting ahead is getting started.",
"Dont watch the clock; do what it does. Keep going.",
"It always seems impossible until its done.",
"Push yourself, because no one else is going to do it for you.",
"Dream big. Work hard. Stay humble.",
"In the middle of every difficulty lies opportunity.",
"Life is 10% what happens to us and 90% how we react to it.",
"Your time is limited, so dont waste it living someone elses life.",
"Happiness is not something ready-made. It comes from your own actions.",
"Be yourself; everyone else is already taken.",
"Talk is cheap. Show me the code.",
"Programs must be written for people to read, and only incidentally for machines to execute.",
"First, solve the problem. Then, write the code.",
"Experience is the name everyone gives to their mistakes.",
"Code is like humor. When you have to explain it, its bad.",
"I could agree with you, but then we would both be wrong.",
"Im not lazy, Im just on energy-saving mode.",
"Im not arguing, Im just explaining why Im right.",
"My bed is a magical place where I suddenly remember everything I forgot to do.",
"Im not great at advice. May I interest you in a sarcastic comment",
"Peace comes from within. Do not seek it without.",
"The quieter you become, the more you can hear.",
"Take a deep breath. Youre exactly where you need to be.",
"Let go of what you cant control, and focus on what you can.",
"The present moment is all you ever have.",
"Bloom where you are planted.",
"Stars cant shine without darkness.",
"Stay close to what makes you feel alive.",
"Do it with passion or not at all.",
"Create your own sunshine."
]
const getquotes = document.getElementById('quote')
const usedIndex = new Set()
function generateQuote(){
    if(usedIndex.size == quotes.length){
        usderIndex.clear()
    }
    while(true){
    const randInd = Math.floor(Math.random() * quotes.length)

    if(usedIndex.has(randInd)) continue

    const quote = quotes[randInd]
    getquotes.innerHTML = quote
    usedIndex.add(randInd)
    break
}}