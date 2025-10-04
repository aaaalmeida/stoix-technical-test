import { useState } from "react"
import { TaskPage } from "./pages/taskpage"
import SunIcon from "./assets/sun.svg"
import MoonIcon from "./assets/moon.svg"
import { ToastContainer } from "react-toastify"

const App = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)

  return (
    <div className={darkTheme ? "theme-dark" : ""}>
      <button id="dark-theme-button" onClick={() => setDarkTheme(!darkTheme)}>
        <img src={darkTheme ? MoonIcon : SunIcon} />
      </button>
      <TaskPage />
      <ToastContainer hideProgressBar={true} pauseOnHover={false} />
    </div>
  )
}

export default App
