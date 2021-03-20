import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import FanPage from '../pages/FanPage/FanPage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ExplorePage from '../pages/ExplorePage/ExplorePage'
import CreateFanPage from '../pages/CreateFanPage/CreateFanPage'
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage'

const Routes = ({currentUser}) => (
    <Switch>
        <Route exact path="/" render={() =>  <HomePage currentUser={currentUser}/>  }/>
        <Route path="/register" component={ RegistrationPage } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/fanpage/:id" component={ FanPage } />
        <Route path="/about" component={ AboutPage } />
        <Route path="/explore" component={ ExplorePage } />
        <Route path="/create" render={ () => <CreateFanPage currentUser={currentUser} />} />
        <Route path="/profile" render={() =>  <UserProfilePage currentUser={currentUser}/> }/>
    </Switch>
)

export default Routes;

