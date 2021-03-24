import React, {createContext, useState} from 'react';



//! version one 
// export const defaultObject = {
//   isUserLogged: false,
//   toggleLoggedState: () => {},
// };
// export const AppContext = createContext(defaultObject);

//! version two lesson 142
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  

  const toggleLoggedState = () => setIsUserLogged((prevValue) => !prevValue);
  

  return <AppContext.Provider value={{ isUserLogged, toggleLoggedState }}>
    {children}
    </AppContext.Provider>;
};

export default AppProvider;
