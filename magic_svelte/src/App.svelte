<script>
  let count = 0;

  function press(event) {
    if (event.key === "Enter") {
      count += 1;
    }
  }
</script>

<button on:keydown={press}> Press Enter to Increment Count </button>
<p>Count: {count}</p>

<style>
</style>
