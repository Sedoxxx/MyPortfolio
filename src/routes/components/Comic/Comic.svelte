<style>
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-align: center;
    min-height: 100%;
  }

  .comic-title {
    margin-top: 5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  .comic-img {
    width: 50vw;
  }

  .comic-alt {
    margin: 4vh auto auto auto;
    text-align: center;
  }

  h2 {
    color: #66bfbf;
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 100;
  }

  p {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    line-height: 2;
  }

  .comic-alt {
    font-size: 25px;
  }
  .comic-date {
    font-size: large;
    font-style: normal;
  }
  .comic-release {
    font-size: 20px;
    margin-bottom: 10vh;
  }
</style>

<script lang="ts">
  export let title: string
  export let alt: string
  export let img: string
  export let imgAlt: string
  export let date: string
  export let fromNow: string
</script>

<body>
  <h2 class="comic-title">{title}</h2>
  <img class="comic-img" src={img} alt={imgAlt} />
  <p class="comic-alt">{alt}</p>
  <p class="comic-date">{date}</p>
  <p class="comic-release">{fromNow}</p>
</body>
