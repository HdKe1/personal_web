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
    <input type="text" />
    <button style="width: 200px; ">Add</button>
  </div>
</div>

<div
  style="display: flex; align-items: baseline; width: 700px; margin: 0 auto;"
>
  <input type="checkbox" />
  <h4 style="flex-grow: 1">I dont know</h4>
  <div style="display: flex">
    <button style=" width: 100px;">Edit</button>
    <button style=" width: 100px;">Delete</button>
  </div>
</div>
