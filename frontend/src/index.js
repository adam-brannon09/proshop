import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';

// Create a router object
const router = createBrowserRouter(
  // Create routes from React elements
  createRoutesFromElements(
    // Define a route to the App component
    <Route path="/" element={<App />}>
      {/* Define a nested route to the HomeScreen component */}
      <Route index={true} path="/" element={<HomeScreen />} />
    </Route>
  )
);

// Render the RouterProvider component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();


// The createBrowserRouter function creates a new router object. The createRoutesFromElements function takes an array of React elements and creates a route object for each element.

// The Route component is used to define a route in the router. The path prop specifies the URL path that the route matches. The element prop specifies the React element that is rendered when the route matches.

// In this case, we are defining two routes:

// A route to the App component with the path "/". This route matches the root URL of the application.
// A nested route to the HomeScreen component with the path "/". This route is nested within the route to the App component. This means that the HomeScreen component will only be rendered when the user visits the root URL of the application.

// The RouterProvider component wraps the entire application and provides it with access to the router.

// When the user navigates to a different page in the application, the router will match the current URL to the routes that have been defined. If a match is found, the router will render the React element that is specified by the element prop of the matching route.

// For example, if the user navigates to the URL /, the router will match this URL to the route to the App component. The router will then render the App component and its nested route to the HomeScreen component.

// The router can also be used to navigate to different pages in the application from within the application itself. For example, you could use the useNavigate hook to navigate to the product page for a specific product.

// Here is an example of how to use the useNavigate hook to navigate to the product page for a specific product: