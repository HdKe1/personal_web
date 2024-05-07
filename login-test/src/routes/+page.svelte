<script lang="ts">
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
</script>

<div class="p-24">
  {#if $page.data.session}
    <h1>You are logged in</h1>
  {:else}
    <h1>You are not logged in</h1>
    <button class="bg-blue-500 py-1 px-2 rounded text-white font-bold"
      >Sign in with github</button
    >
  {/if}
</div>
