import { BrowserRouter } from "react-router-dom"

//lessons
// import Lesson18 from "./lessons/Lesson18/Lesson18"
import Lesson19 from "./lessons/Lesson19/Lesson19"

//homeworks
// import Homework18 from "./homeworks/Homework18/Homework18"


const App = () => {
  return (
    <BrowserRouter>
      {/* <Lesson18 /> */}
      {/* <Homework18 /> */}
      <Lesson19 />
    </BrowserRouter>
  )
}

export default App
