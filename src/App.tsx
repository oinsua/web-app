import { Helmet, HelmetProvider } from 'react-helmet-async';



function App() {
  return (
          <HelmetProvider>
           <Helmet>
                <meta charSet="utf-8" /> 
                <title>Web Application</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          </HelmetProvider>
 )
}

export default App;
