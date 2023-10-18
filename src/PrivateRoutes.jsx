import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function PrivateRoutes({ children }) {
  const navigate = useNavigate();

  const dataCtx = useContext(UserContext);

  useEffect(() => {
    if (dataCtx.controlUser === false) {
      navigate("/");
    }
  }, [dataCtx.controlUser]);

  return dataCtx.controlUser ? children : null;
}
