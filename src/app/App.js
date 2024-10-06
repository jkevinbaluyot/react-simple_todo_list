import '../assets/stylesheets/App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListIndex from './pages/lists/ListIndex';
import {
  Topbar,
  Footer,
} from '../components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListIndex />,
  },
]);

function App() {
  return (
    <>
      <Topbar />
      <div className="main">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
