<script lang="ts">
  import { btn } from './Button.css';
  let count = 0;
  let classname = '';
  export { classname as class };

  function handleClick() {
    count += 1;
  }
</script>

<button class="{btn} {classname || 'text-red'}" on:click={handleClick}>
  clicks: {count}
  <slot />
</button>
