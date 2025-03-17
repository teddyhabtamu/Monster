import BasicEffect from "./components/BasicEffect"
import Counter from "./components/Counter"
import CounterEffect from "./components/CounterEffect"
import FetchDataEffect from "./components/FetchDataEffect"
import FocusInput from "./components/FocusInput"
import Timer from "./components/Timer"
import UpdateUser from "./components/UpdateUser"
import { UserContext, UserProvider } from "./components/UserContext"

import UserProfile from "./components/UserProfile"

function App() {

  return (
    // <UserProvider>
    //   <BasicEffect/>
    //   <CounterEffect/>
    //   <FetchDataEffect/>
    //   <UserProfile/>
    //   <UpdateUser/>
    // </UserProvider>
    // <FocusInput/>
    <Timer/>
  )
}

export default App
