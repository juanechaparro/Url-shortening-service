import { useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { AppRouter } from "./routes/AppRouter";



function App() {
  
const [user, setUser] = useState({});
const [checking, setChecking] = useState(true);



  return (
    <div>
      <AuthContext.Provider value={
                {
                    user,
                    setUser,
                    checking,
                    setChecking
                }
            } >
     <AppRouter/>
     </AuthContext.Provider>
    </div>
  );
}

export default App;