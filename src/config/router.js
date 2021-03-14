import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import LoginPage from '../pages/LoginPage/LoginPage'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={ LoginPage } />
    </Switch>
)

export default Routes