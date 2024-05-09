<script lang="ts">
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
</script>

<div class="p-24">
  {#if $page.data.session}
    <h1>You are logged in</h1>
    {#if $page.data.session.user?.image}
      <img
        src={$page.data.session.user.image}
        alt="user profile pic"
        class="w-12 h-12"
      />
    {/if}
    <p>Singed in as {$page.data.session.user?.name}</p>
    <button
      on:click={() => signOut()}
      class="bg-blue-500 py-1 px-2 rounded text-white font-bold"
      >Sign out
    </button>
  {:else}
    <h1>You are not logged in</h1>
    <button
      on:click={() => signIn("github")}
      class="bg-blue-500 py-1 px-2 rounded text-white font-bold"
    >
      Sign in with github</button
    >
  {/if}
</div>
