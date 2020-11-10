<template>
    <div class="card-container">
    <h3>{{card.title}}</h3>
    <div class="text-container">
        <p v-for="(p,index) in card.text" :key="index">{{p}}</p>
    </div>

    <div class="audio-container">
        <audio controls>
        <source :src="getAudioSrc(`${card.audio}`)" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['card'],
  methods: {
      getAudioSrc(audio) {
          return require(`../assets/audios/${audio}`);
      }
  }
}
</script>

<style scoped>

.card-container {
    width: 600px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 24px;
    margin: auto;
    margin-bottom: 50px;
    padding-left: 15px;
    padding-bottom: 15px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.06),0 2px 5px 0 rgba(0,0,0,.2);
}

.card-container h3 {
    font-size: 36px;
    margin-top: 15px;
    margin-bottom: 10px;
}

.card-container .text-container {
    text-align: left;
}

.card-container .text-container p {
    line-height: 1.3em;
}

.card-container .audio-container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.card-container .audio-container audio {
    width: 100%;
    margin-top: 25px;
    padding-right: 15px;
}
</style>
