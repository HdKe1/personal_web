<script>
  import Nested from "./firstnest.svelte";

  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicked{count}
  {count === 1 ? "time" : "times"}
</button>

<button on:keydown={increment}>
  Pressed{count}
  {count === 1 ? "time" : "times"}
</button>
<Nested answer={42} />

{#if count > 10}
  <p>{count} is greater than 10</p>
{/if}
