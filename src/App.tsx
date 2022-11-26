import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import RouteApp from './pages/routes';
import ShowLoginLogout from './components/ShowLoginLogout';
import { useAppSelector } from './app/redux/hooks';
import { getUser } from './features/user/userSlice';



function App() {
   const user = useAppSelector(getUser);
   console.log('user App:', user)
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
