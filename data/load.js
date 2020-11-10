document.addEventListener('DOMContentLoaded', init);
var TextAndAudio = TextAndAudio || {};

TextAndAudio.Manage = (function () {
    function Manage() {
        this.config = {
            defaultVolume: 0.35
        }
        this.data = [
            {
                title: " Jack Hannaford Part 1",
                text: [
                    "There was once a farmer and his wife. She had been married before, her first husband had died, and now she was married again.",
                    "They lived on a remote farm in the west of England, and what a pair of fools they were! Which of them was the most foolish? Listen to the story and decide for yourself."
                ],
                audio: "jackhannafordpart1.mp3"
            },
            {
                title: " Jack Hannaford Part 2",
                text: [
                    "In those days, there also lived an old soldier called Jack Hannaford. His coat was old and he was poor, but nobody thought that Jack Hannaford was stupid. He was sly like a fox. When he left the army, he walked all around the country, looking for ways to play his tricks.",
                    "After he had traveled for some time, he came across the farm belonging to the pair. He knocked on the door of the house, and a moment later, the wife answered. She looked him up and down, quite astonished, because few strangers were able  to make the difficult journey to their home. “Where did you come from?” she asked."
                ],
                audio: "jackhannafordpart2.mp3"
            },
            {
                title: " Jack Hannaford Part 3",
                text: [
                    "Jack looked up at the pale blue sky, and he said, “I came from Heaven.” “My goodness!”, she said. “Did you see my husband there?” (The farmer’s wife was talking about her first husband, the man who had died). Oh yes, I got to know him well when I was staying in Heaven,” said Jack. “And how is he doing?”, asked the woman. “He is fine,” replied the old soldier."
                ],
                audio: "jackhannafordpart3.mp3"
            },
            {
                title: " Jack Hannaford Part 4",
                text: [
                    "“He works hard sewing and mending clothes for the saints and angels, but even so, he sometimes doesn’t have enough money to eat.” “And did he send me a message?”, she asked. “Yes, he did! That is why I’ve come here. He asked me to bring back some money for him, so that he can spend his days in paradise more comfortably.” On hearing this, the poor woman’s heart almost broke with pity."
                ],
                audio: "jackhannafordpart4.mp3"
            },
            {
                title: " Jack Hannaford Part 5",
                text: [
                    "“I’ll give him anything he wants! He’s a good man, God bless him,” she said. Then she went to the chimney where the couple’s savings were kept hidden. She took out two pieces of gold and five pieces of silver, which in those days was a lot of money. She handed everything over to the old soldier and told him to hurry up and give it to her first husband. “I will,” Jack told the woman, “as soon as I return to Heaven.”"
                ],
                audio: "jackhannafordpart5.mp3"
            },
            {
                title: " Jack Hannaford Part 6",
                text: [
                    "When the farmer came back, his wife told him all about how a messenger had come from Heaven. She said that the man asked for money for her first husband, who was living and working in Heaven, but who was poor. “You are a foolish woman!” shouted the farmer.",
                    "“How could you believe such a silly story?” “Well, you are even more foolish,” said the woman, “because you showed me where the money was hidden.” The husband did not agree with what she said, but he did not stay to argue. He hurried off on his horse to try to find the old soldier before he got too far away."
                ],
                audio: "jackhannafordpart6.mp3"
            },
            {
                title: " Jack Hannaford Part 7",
                text: [
                    "“Jack Hannaford heard the sound of the horse behind him. He knew that the farmer was coming for him and for the money. Quickly, he came up with a plan. He knelt by the side of the road, covered his eyes with one hand, and pointed up to the sky with the other. The farmer soon reached him and asked: “What are you doing here by the side of the road? Why are you protecting your eyes and pointing up to the sky?” “It is amazing! It is God’s work!” shouted the man. “I see a wonderful thing!” “What kind of wonderful thing?” asked the farmer. “A man is walking straight up to Heaven on a rainbow, just as if it were a road.“"
                ],
                audio: "jackhannafordpart7.mp3"
            },
            {
                title: " Jack Hannaford Part 8",
                text: [
                    "The farmer looked at the sky, but he could not see the amazing rainbow or the man walking on it. “Here,” said the soldier, “kneel down by the side of the road and look up at the sky like I’m doing.” “I will if you’ll hold my horse,” said the farmer, and he jumped down from his horse. As soon as the farmer knelt down, Jack Hannaford jumped onto the horse and escaped! Now, who do you think was more foolish, the farmer or his wife?"
                ],
                audio: "jackhannafordpart8.mp3"
            },
            {
                title: "The Endless Tale Part 1",
                text: [
                    "In the Far East there was a Great King who had no work to do. Every day, andall day long, he sat on soft cushions and listened to stories. And no matterwhat the story was about, he never grew tired of hearing it, even thoughmany of the stories took hours to complete. “There is only one fault with yourstory,” he often said, “it is too short.” All the storytellers in the world wereinvited to his palace; and some of them told stories that were very longindeed."
                ],
                audio: "theendlesstalepart1.mp3"
            },
            {
                title: "The Endless Tale Part 2",
                text: [
                    "But The King was always sad when the story ended. At last he sent a message to every city and town, offering a prize to any one able to tell him an endless tale. He said: “To the man that will tell me a story which lasts forever, I will give my daughter as his wife; and I will make him my heir, and he shall be king after me.” But this challenge wasn’t quite what it seemed. The King added a strict condition. “If any man tries to tell such a story and fails, then his head will be cut off.”."
                ],
                audio: "theendlesstalepart2.mp3"
            }
        ]

        console.log("Manage object created.")
    }

    Manage.prototype.start = function () {
        console.log("Manage starting...")
        registerEvents.call(this);
    }

    function registerEvents() {
        console.log("Registering events...");
        this.rootCards = document.getElementById('card-root');


        appendCards.call(this);
        this.audioPlayers = document.getElementsByTagName('audio');
        defaultValues.call(this);
    }

    function appendCards() {
        let cardsHtml = generateCards(this.data);
        console.log("Appending cards...");
        this.rootCards.innerHTML = cardsHtml;
    }

    function generateCards(data) {
        console.log(`Generating ${data.length} ${data.length > 1 ? 'cards' : 'card'}`)
        var cards = '';
        const template = `
        <div class="card-container">
            <h3>::title::</h3>
            <div class="text-container">
                ::paragraphs::
            </div>

            <div class="audio-container">
                <audio controls>
                    <source src="data/audios/::audio::" type="audio/mp3">
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>`;

        data.forEach(card => {
            let tmpCard = template;
            let paragraphs = '';

            card.text.forEach(p => {
                paragraphs += `<p> ${p} </p>`
            })

            tmpCard = tmpCard.replace('::title::', card.title)
            tmpCard = tmpCard.replace('::paragraphs::', paragraphs);
            tmpCard = tmpCard.replace('::audio::', card.audio)

            cards += tmpCard;
        });

        return cards;
    }

    function defaultValues() {
        console.log('Setting default values...')
        Array.from(this.audioPlayers).forEach(audioPlayer => {
            audioPlayer.volume = this.config.defaultVolume;
        });
    }

    return Manage;
}())

function init() {
    console.log("init load.js")
    const manage = new TextAndAudio.Manage();
    manage.start();
}