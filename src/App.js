import { Routes, Route } from "react-router-dom";

// import Home from "./component/Home";

import Book from "./component/Book";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
