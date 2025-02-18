import { useEffect, useState } from "react";
// import api from "./services/api";
import AppRoutes from "./routes/routes";

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   api.get("/").then((response) => {
  //     setMessage(response.data);
  //   });
  // }, []);

  return (
    <AppRoutes />
  );
}

export default App;
