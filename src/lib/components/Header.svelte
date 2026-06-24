<script lang="ts">
  import { Camera, HomeIcon } from '@lucide/svelte';
</script>

<header class="header flex flex-row items-center justify-between">
	
	<div class="actions flex flex-col">
		<HomeIcon size={20} />
	</div>
	<nav>
	  <a href="/">Home</a>
	  <a href="/blog">Blog</a>
	</nav>
</header>