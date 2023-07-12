<script lang="ts">
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import './styles.css'
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>
