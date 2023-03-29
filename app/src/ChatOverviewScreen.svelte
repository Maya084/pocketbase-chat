<script lang="ts">
  import type { UsersResponse, ChatsResponse } from "./types/pocketbase-types";
  import { currentUser, errorMessage, pocketbase } from "./lib/pocketbase";
  import { onDestroy, onMount } from "svelte";
  import ChatCard from "./ChatCard.svelte";

  let allChats: ChatsResponse[] = [];
  let newUserEmail = "";

  onMount(async () => {
    allChats = await getChatWithUsers();

    pocketbase.collection("chats").subscribe("*", async (e) => {
      allChats = await getChatWithUsers();
    });
  });

  function getChatWithUsers() {
    try {
      return pocketbase.collection("chats").getFullList<ChatsResponse>(200, {
        sort: "created",
        expand: "users",
        filter: `users ~ '${$currentUser.id}'`,
      });
    } catch (err) {
      errorMessage(err);
      return [];
    }
  }

  async function createChatWithUser() {
    try {
      const otherUser = await pocketbase
        .collection("users")
        .getFirstListItem<UsersResponse>(`email='${newUserEmail}'`);

      await pocketbase.collection("chats").create({
        users: [$currentUser.id, otherUser.id],
      });
    } catch (err) {
      errorMessage(err);
    }
  }

  onDestroy(() => {
    pocketbase.collection("chats").unsubscribe("*");
  });
</script>

<div class="p-8">
  {#each allChats as chat}
    <a href="#/chats/{chat.id}">
      <ChatCard {chat} />
    </a>
  {/each}
  <div class="p-4 bg-gray-100 shadow rounded">
    <input type="email" bind:value={newUserEmail} />
    <button
      class="bg-gray-200 rounded p-2 hover:bg-gray-300"
      on:click={createChatWithUser}>Create chat</button
    >
  </div>
</div>
