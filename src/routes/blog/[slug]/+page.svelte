<script lang="ts">
    import type { Post } from "$lib/posts";
  let { data }: { data: { post: Post } } = $props();
</script>

<h1>{data.post.title}</h1>
<h1>{data.post.content}</h1>