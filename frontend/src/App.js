import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Pages/Root';
import Homepage from './Pages/Home';
import EventRootLayout from './Pages/EventRoot';
import Eventpage, {loader as eventloders} from './Pages/Events';
import EventDetailspage, {loader as eventdetailloder, action as deleteEventAction} from './Pages/EventDetails';
import NewEventpage from './Pages/NewEvent';
import EditEventpage from './Pages/EditEvent';
import ErrorPage from './Pages/Error';
import {action as manipulateEventAction} from './compoents/EventForm';
import Newsletterpage, {action as newsLetterAction} from './Pages/NewsLetter';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Homepage/>},
      {
        path: 'events',
        element: <EventRootLayout/>,

        children: [
          {index: true, element: <Eventpage/>,
          loader: eventloders
        },
          {
          path: ':eventId', 
          id: 'event-detail',
          loader: eventdetailloder,

          children: [
            {index: true, element: <EventDetailspage/>,
              action: deleteEventAction,
            },
            {path: 'edit', element: <EditEventpage/>,
           action: manipulateEventAction,
          },
          ],
        },
          {path: 'new', element: <NewEventpage/>,
          action: manipulateEventAction,

          },

        ],
      },
      
      {
        path: 'newsletter',
        element: <Newsletterpage/>,
        action: newsLetterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}>
    
  </RouterProvider>
}

export default App;
