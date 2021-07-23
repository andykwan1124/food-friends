import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext';
import AddSuggestions from './pages/AddSuggestions';
import Login from './pages/Login'
import { firestore } from './util/firebase';

export const PrivateRoute = ({ path, children }) => {
  const { isAuthed } = useAuth()

  return (
    !isAuthed ?
    <Redirect to="/" /> :
    <Route path={path}>
      {children}
    </Route>
  )
}

export const PublicRoute = ({ path, children }) => {
  const { isAuthed } = useAuth()

  return (
    isAuthed ?
    <Redirect to="/add-places" /> :
    <Route path={path}>
      {children}
    </Route>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/add-places">
            <AddSuggestions/>
          </PrivateRoute>
          <PublicRoute path="/">
            <Login/>
          </PublicRoute>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App;
