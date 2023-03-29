<script lang="ts">
  import { currentUser } from "./lib/pocketbase";
  import LoginScreen from "./LoginScreen.svelte";
  import UserScreen from "./UserScreen.svelte";
  import { location } from "./lib/router";
  import ChatOverviewScreen from "./ChatOverviewScreen.svelte";
  import Chat from "./Chat.svelte";
</script>

{#if !$currentUser}
  <LoginScreen />
{:else}
  {#if $location === "#chats"}
    <ChatOverviewScreen />
  {:else if $location.includes("chats")}
    <Chat />
  {/if}

  <UserScreen />
{/if}
