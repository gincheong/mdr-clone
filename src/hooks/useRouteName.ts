import DummySidebar from '../data/dummySidebar';
import { useLocation } from 'react-router';

export const useRouteName = () => {
  const location = useLocation();
  let title = '';
  DummySidebar.forEach(each => {
    if (location.pathname === `${each.layout}/${each.path}`) {
      title = each.title;
    }
  });
  
  return title;
};