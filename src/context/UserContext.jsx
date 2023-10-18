import { createContext, useEffect, useState } from "react";
import { auth } from "../services/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [controlUser, setControlUser] = useState(false);
  const [userUid, setUserUid] = useState("")
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setControlUser(true);
        setUserUid(user.uid)
      } else {
        setControlUser(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);


  const data = {
    controlUser,
    setControlUser,
    userUid
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
