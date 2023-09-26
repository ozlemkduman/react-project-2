import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function PrivateRoutes({ children }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const [controlUser, setControlUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setControlUser(true);
      } else {
        setControlUser(false);
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (controlUser === false) {
      navigate("/");
    }
  }, [controlUser, navigate]);

  return controlUser ? children : null;
}
