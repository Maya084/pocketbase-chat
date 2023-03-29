import PocketBase, { ClientResponseError } from "pocketbase";
import { writable } from "svelte/store";

export const pocketbase = new PocketBase('http://127.0.0.1:8090');

export const currentUser = writable(pocketbase.authStore.model);

pocketbase.authStore.onChange(() => {
  currentUser.set(pocketbase.authStore.model);
});

export function errorMessage(error: unknown) {
  const errorObj = error as ClientResponseError;
  console.error(errorObj.message);
  return errorObj.message;
}
