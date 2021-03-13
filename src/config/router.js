import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ HomePage } />
    </Switch>
)

export default Routes