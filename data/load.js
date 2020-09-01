document.addEventListener('DOMContentLoaded', init);
var TextAndAudio = TextAndAudio || {};

TextAndAudio.Manage = (function () {
    function Manage() {
        this.config = {
            defaultVolume: 0.15
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