import { createContext } from "react";

export const defaultObject = {
  isUserLogged: false,
  toggleLoggedState: () => {},
};
export const Le140Context = createContext(defaultObject);
