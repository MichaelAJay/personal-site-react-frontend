import { MenuProps } from 'antd';
import { odditiesSiderItems } from '../pages/oddities/oddities-sider-items';
import { Layout } from 'antd';
import { adminSiderItems } from '../pages/admin/admin-sider-items';
import { useLocation } from 'react-router-dom';
import Navigator from './Navigator';
const { Sider } = Layout;

const getItems = (currentPage: string) => {
  const pagePrefix = currentPage.split('/')[0];

  let items: MenuProps['items'] = [];
  switch (pagePrefix) {
    case 'oddities':
      items = odditiesSiderItems;
      break;
    case 'admin':
      items = adminSiderItems;
      break;
    case 'contact':
    case '':
      items = [];
      break;
    default:
      console.error(`Invalid currentPage ${currentPage}`);
  }
  return items;
};

function SiderNav({
  onNavigate,
  currentPage,
}: {
  onNavigate: any;
  currentPage: string;
}) {
  const location = useLocation();

  const PATH_PREFIXES_WITH_SIDER = ['/oddities', '/admin'];
  let isSiderCollapsed = true;
  for (let i = 0; i < PATH_PREFIXES_WITH_SIDER.length; i++) {
    if (location.pathname.startsWith(PATH_PREFIXES_WITH_SIDER[i])) {
      isSiderCollapsed = false;
      break;
    }
  }

  return (
    <Sider collapsed={isSiderCollapsed} collapsedWidth={0}>
      <Navigator
        onNavigate={onNavigate}
        mode="inline"
        items={getItems(currentPage)}
      />
    </Sider>
  );
}

export default SiderNav;
