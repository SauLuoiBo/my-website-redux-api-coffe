import Layout from "./Layouts/Layout";
import HomePage from "./Pages/HomePage";
import Theme from "./styles/Theme";
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import AddContactPage from "./Pages/AddContactPage";
import ContactDetail from "./Components/ContactDetail/ContactDetail";




function App() {
  return (
      <Router>
        <Theme>
        <Layout>
          <Switch>
            <Route exact path="/" render={()=><HomePage/>} />
            <Route exact path="/addcontact" render={() => <AddContactPage/>} />
            <Route  path="/addcontact/:id" render={()=> <ContactDetail/>}  />
          </Switch>
        </Layout>
      </Theme>
      </Router>

  )
}

export default App;
