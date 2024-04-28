<script>
  let toDoList = [];
  let textInput = "";
  function setEditing(i, isEditing) {
    toDoList[i].editing = isEditing;
  }
  function deleteToDo(i) {
    toDoList.splice(i, 1);
    toDoList = toDoList;
  }
  function addToDo() {
    toDoList = [
      ...toDoList,
      { content: textInput, editing: false, checked: false },
    ];
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
  />
</svelte:head>

<div style="margin: 0 auto; padding: 20px; width: 800px;">
  <h2>To do list</h2>
  <p>Enter your to do list here</p>
  <div style="display: flex;">
    <input type="text" bind:value={textInput} />
    <button style="width: 200px; " on:click={addToDo}>Add</button>
  </div>
</div>

{#each toDoList as toDo, i}
  <div
    style="display: flex; align-items: baseline; width: 700px; margin: 0 auto;"
  >
    {#if toDo.editing}
      <input type="text" bind:value={toDo.content} />
    {:else}
      <input type="checkbox" bind:checked={toDo.checked} />
      <h4 style="flex-grow: 1">{toDo.content}</h4>
    {/if}
    <div style="display: flex">
      {#if toDo.editing}
        <button on:click={() => setEditing(i, false)}>Save</button>
      {:else}
        <button on:click={() => setEditing(i, true)}>Edit</button>
      {/if}
      <button on:click={() => deleteToDo(i)}>Delete</button>
    </div>
  </div>
{/each}
