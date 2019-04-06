import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import SamplePage from './views/SamplePage';
import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';

import PageNotFound from './views/PageNotFound';

const App = () => (
  <div className="App">
    <Helmet titleTemplate="%s - SiteName" defaultTitle="Some default title">
      <meta name="description" content="some description content" />
    </Helmet>
    {/* BrowserRouter comes with default history */}
    <BrowserRouter>
      <div>
        <Header />
        <div className="main">
          <Switch>
            <Route exact path="/" component={SamplePage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />

            <Route path="" component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
