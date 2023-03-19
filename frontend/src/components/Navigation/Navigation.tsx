import { Link } from 'react-router-dom';

type NavItem = {
  to: string;
  label: string;
};

interface Props {
  navItems: NavItem[];
}

const Navigation = ({ navItems }: Props) => (
  <div>
    {navItems.map(({ to, label }: NavItem) => (
      <Link to={to} key='to'>
        {label}
      </Link>
    ))}
  </div>
);

export default Navigation;
