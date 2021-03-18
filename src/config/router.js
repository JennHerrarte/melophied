import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import FanPage from '../pages/FanPage/FanPage'
import ExplorePage from '../pages/ExplorePage/ExplorePage'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={ LoginPage } />
        <Route path="/fanpage" component={ FanPage } />
        <Route path="/explore" component={ ExplorePage } />
    </Switch>
)

export default Routes;

