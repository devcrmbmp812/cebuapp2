import BetResultScreen from '../Views/BetResult';
import DrawingScreen from '../Views/Drawing';
import MyBetScreen from '../Views/MyBet';
import AboutScreen from '../Views/About';
import CreditsScreen from '../Views/Credits';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {name: 'Bet Result', screen: BetResultScreen, icon: 'view-list'},
  {name: 'Drawing', screen: DrawingScreen, icon: 'drawing'},
  {name: 'MyBet', screen: MyBetScreen, icon: 'database'},
  {name: 'About', screen: AboutScreen, icon: 'face-profile'},
  {name: 'Credits', screen: CreditsScreen, icon: 'account-circle'},
  {name: 'Sign Out', screen: CreditsScreen, icon: 'power'},
];
