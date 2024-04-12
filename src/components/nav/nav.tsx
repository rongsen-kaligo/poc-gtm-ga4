import Link from 'next/link';

import { supportedRoutes } from '../../globals/constants';
import styles from './styles.module.css' assert { type: 'css' };

interface NavProps {
  current: (typeof supportedRoutes)[number]['key'];
}

export function Nav(props: NavProps) {
  const { current } = props;

  return (
    <nav>
      <ul>
        {supportedRoutes.map(({ key, page, route }) => {
          const isCurrent = key === current;

          return (
            <li key={route}>
              {isCurrent ? (
                <p className={styles.current}>{page} (current)</p>
              ) : (
                <Link href={route}>{page}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
