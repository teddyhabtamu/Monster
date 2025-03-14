import { Children, createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setName] = useState({name: 'Tewodros'});

  const updateUser = (newName) => {
    setName({name: newName});
  }

  return <UserContext.Provider value={{user, updateUser}}>
    {children}
  </UserContext.Provider>
}

export {UserContext, UserProvider}