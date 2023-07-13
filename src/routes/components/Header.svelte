<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === 'myPortfolio/' ? 'page' : undefined}>
				<a href="{base}/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === 'myPortfolio/comic' ? 'page' : undefined}>
				<a href="{base}/comic">Comic</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		height: auto;
		width: 100%;
		display: flex;
		position: fixed;
		top: 0;
		background: transparent;
		align-items: center;
		justify-content: center;
	}

	nav {
		height: fit-content;
		width: 300px;
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.3);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3.5em;
		width: 20rem;
		border-radius: 0 0 20px 20px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		transition: all 0.5s ease;
	}

	ul:hover {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		color: #66bfbf;
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
