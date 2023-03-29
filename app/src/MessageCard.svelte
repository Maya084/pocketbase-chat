<script lang="ts">
  export let ownsMsg: boolean = false;
</script>

<div
  class="w-max max-w-lg overflow-hidden py-1 px-2 rounded {ownsMsg
    ? 'bg-gray-100 self-end text-right'
    : 'bg-blue-50 self-start text-left'}"
>
  <slot />
</div>
