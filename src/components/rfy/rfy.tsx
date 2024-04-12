/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import styles from './styles.module.css' assert { type: 'css' };

export function Rfy() {
  return (
    <div className={styles.rfy}>
      <h2>Recommended for you</h2>

      <div className={styles.carousel}>
        {Array.from({ length: 10 }, (_, i) => {
          const key = String(i);

          return (
            <Link
              className="rfy-item"
              data-rfy={key}
              href={`/other/${key}`}
              key={key}>
              <img
                alt={`This is a random image, indexed at ${i + 1}`}
                src={`https://placehold.co/416x214.svg?text=${i + 1}`}
                width="416"
                height="214"
                decoding="async"
                loading="lazy"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
