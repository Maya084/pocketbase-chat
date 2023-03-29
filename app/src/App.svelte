<script lang="ts">
  import { currentUser } from "./lib/pocketbase";
  import LoginScreen from "./LoginScreen.svelte";
  import UserScreen from "./UserScreen.svelte";
</script>

{#if !$currentUser}
  <LoginScreen />
{:else}
  <UserScreen />
{/if}
