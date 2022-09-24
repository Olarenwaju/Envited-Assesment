import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEvent from "./pages/createEvent/createEvent";
import EventPage from "./pages/eventPage/eventPage";
import Hero from "./pages/hero/Hero";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Hero />} />
          <Route path="/create" element={<CreateEvent/>} />
          <Route path="/event" element={<EventPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
