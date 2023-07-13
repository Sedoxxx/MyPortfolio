<script lang="ts">
	import TopContainer from './components/Home/TopContainer.svelte';
	import MainContainer from './components/Home/MainContainer.svelte';
	import './css/header.css';
	import './css/education.css';
	import './css/skills.css';
	import './css/work.css';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Mohamed Aymen Daassi</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap"
		rel="stylesheet"
	/>
	<!-- <link rel="stylesheet" type="text/css" href="css/styles.css" /> 
  <link rel="stylesheet" type="text/css" href="css/work.css" /> 
  <link rel="stylesheet" type="text/css" href="css/header.css" />
  <link rel="stylesheet" type="text/css" href="css/skills.css" />
  <link rel="stylesheet" type="text/css" href="css/education.css" /> -->
</svelte:head>

<body>
	<TopContainer />

	<MainContainer />
</body>

<style>
	/*@import url('css/styles.css');*/
</style>
