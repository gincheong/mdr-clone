// Models
import { ISidebarNav } from '../models';
// Views
import { Dashboard, Notification, TableList, UserProfile } from '../views';

const dummySidebar: ISidebarNav[] = [
  {
    title: 'Dashboard',
    path: 'dashboard',
    component: Dashboard,
    layout: '/main'
  },
  {
    title: 'User Profile',
    path: 'user_profile',
    component: UserProfile,
    layout: '/main'
  },
  {
    title: 'Table List',
    path: 'table_list',
    component: TableList,
    layout: '/main'
  },
  {
    title: 'Notification',
    path: 'notification',
    component: Notification,
    layout: '/main'
  }
];

export default dummySidebar;