import { useContext } from "react";
import { StoreContext } from "./StoreProvider";

export function useCommentsStore() {
  const rootStore = useContext(StoreContext);
  
  if (!rootStore) {
    throw new Error(
      "nie znaleziono RootStore, sprawdz czy masz Provider ktory go dostarcza"
    );
  }
  return rootStore.commentsStore;
}
