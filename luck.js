document.getElementById('dob-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const luckMessage = getLuckMessage(dob);
    document.getElementById('result').textContent = luckMessage;
});

function getLuckMessage(dob) {
    const messages = [
        "Today is the start of something wonderful. 🌟 Embrace the new beginnings!",
        "Keep an eye out for small joys today. 🌸 They might turn into something big!",
        "You might face some challenges today😟, but remember, every challenge is an opportunity. 💪",
        "Expect pleasant surprises today! 🎁 Stay open to new experiences.",
        "Your creativity will shine today. ✨ Let your imagination lead the way!",
        "Today is a great day to connect with others. 🌈 Share your positivity!",
        "Focus on your goals and you’ll make significant progress today. 🚀",
        "Enjoy the little things today; they can bring unexpected happiness. 🌻",
        "Your efforts are likely to pay off today. Keep up the good work! 🏆",
        "Stay calm and relaxed; today will be a day of balance and peace. 🧘‍♀️",
        "Look out for opportunities to learn something new today. 📚 Knowledge is power!",
        "You might find yourself in the spotlight today. Shine bright! 🌟",
        "Today is perfect for trying something new. Take that leap of faith! 🚀",
        "Feel the love around you today. 💖 Embrace the warmth and positivity.",
        "It’s a good day for self-reflection. 🪞 Take some time to understand yourself better.",
        "A day full of potential awaits you. 🌟 Make the most of it!",
        "Your hard work will start to show results. Keep pushing forward! 💼",
        "Expect a breakthrough or a new insight today. 🌠 Stay open to new ideas.",
        "Be kind to yourself today. 🌹 You deserve all the good things coming your way!",
        "Today, focus on what makes you happy. 😊 Your happiness will be contagious!",
        "A little adventure is in store for you. 🌍 Embrace the journey!",
        "Today is about setting new goals. 🎯 Dream big and plan ahead.",
        "You may find clarity on something that’s been bothering you. 🧩",
        "Expect to receive support from unexpected places. 🤝",
        "Focus on positive affirmations today. They will boost your confidence! 💬",
        "It’s a great day to pamper yourself. Treat yourself to something special! 🎁",
        "A fun and joyous day is ahead. 🎉 Enjoy every moment to the fullest!",
        "Stay optimistic and you’ll attract good vibes throughout the day. 🌟",
        "Today, seek out opportunities for growth. 🌱 Embrace new challenges.",
        "Your intuition will guide you well today. Trust your gut feelings! 🔮",
        "Find time to relax and recharge today. 🌿 You’ve earned it!",
        "Expect a day filled with laughter and joy. 😂 Share it with those around you!",
        "You might encounter a new opportunity. 🚀 Be ready to seize it!",
        "Reflect on your achievements and plan for the future. 📝 It’s a day of growth!",
        "Surround yourself with positivity. 🌟 It will enhance your day!",
        "A day of relaxation and fun awaits. 🎉 Enjoy every bit of it!",
        "Your efforts will bring good results. 📈 Stay motivated and keep going!",
        "Seek out joy in the small things. 🌸 They can make your day special!",
        "Stay confident and focused. 💪 You have the power to make today great!",
        "Look out for a special moment or surprise. 🎁 It will add joy to your day!",
        "Trust in the process. 🕊️ Everything is unfolding as it should.",
        "Enjoy the journey today, and remember to appreciate the little things. 🌻"
    ];

    const seed = dob.getFullYear() + dob.getMonth() + dob.getDate();

    const randomIndex = (seed + (seed * 7) % messages.length) % messages.length;
    
    return messages[randomIndex];
}
