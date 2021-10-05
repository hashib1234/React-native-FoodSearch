import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultSshowScreen';



const navigator = createStackNavigator({
  Search : SearchScreen,
  ResultShow : ResultShowScreen
}, {
  initialRoutName : 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
}
);

export default createAppContainer(navigator)