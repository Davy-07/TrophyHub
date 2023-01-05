import { useState } from "react";
import reactLogo from "/assets/react.svg";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CheckAuth />} />
          <Route exact path="/log-in" element={<Login />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
