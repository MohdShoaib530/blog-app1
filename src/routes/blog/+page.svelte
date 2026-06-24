<script lang="ts">
  import type { Post } from "$lib/posts";
  let { data }: { data: { posts: Post[] } } = $props();
</script>

{#each data.posts as post}
	<a href={`/blog/${post.slug}`}>
		<h2>{post.title}</h2>
	</a>
{/each}