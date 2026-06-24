<script lang="ts">
	export let title = 'My Blog';
	export let subtitle = 'A simple Svelte blog app';
</script>

<header class="site-header">
	<div class="header-content">
		<h1>{title}</h1>
		<p>{subtitle}</p>
	</div>
</header>

<style>
	.site-header {
		padding: 1.5rem;
		background: #0d1117;
		color: white;
		border-bottom: 1px solid #30363d;
	}

	.header-content {
		max-width: 960px;
		margin: 0 auto;
	}

	h1 {
		margin: 0;
		font-size: 2rem;
	}

	p {
		margin: 0.5rem 0 0;
		color: #8b949e;
	}
</style>
