import { Suspense } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Gallery } from "./components/gallery";
import { Home } from "./components/home";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/mostWanted" component={Gallery} />
      </Router>
    </div>
    </Suspense>
  );
};

export default App;
