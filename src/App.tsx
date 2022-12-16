import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import RouteApp from './pages/routes';
import ShowLoginLogout from './components/ShowLoginLogout';



function App() {
  return (
          <>
           <Helmet>
                <meta charSet="utf-8" /> 
                <title>Web Application</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           <BrowserRouter>
              <ShowLoginLogout />
              <RouteApp />
           </BrowserRouter>
          </>
 )
}

export default App;
