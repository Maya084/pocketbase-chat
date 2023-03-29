<script lang="ts">
  import { currentUser } from "./lib/pocketbase";
  import LoginScreen from "./LoginScreen.svelte";
  import UserScreen from "./UserScreen.svelte";
  import { location } from "./lib/router";
</script>

{#if !$currentUser}
  <LoginScreen />
{:else if $location === "#user"}
  <UserScreen />
{/if}
