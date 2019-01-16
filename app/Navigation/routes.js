import TravelScreen from '../Views/Travel';
import BookingScreen from '../Views/Booking';
import AboutScreen from '../Views/About';
import CreditsScreen from '../Views/Credits';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {name: 'Bet Result', screen: TravelScreen, icon: 'view-list'},
  {name: 'Drawing', screen: BookingScreen, icon: 'drawing'},
  {name: 'My Bet History', screen: AboutScreen, icon: 'database'},
  {name: 'About', screen: AboutScreen, icon: 'face-profile'},
  {name: 'Credits', screen: CreditsScreen, icon: 'account-circle'},
  {name: 'Sign Out', screen: CreditsScreen, icon: 'power'},
];
