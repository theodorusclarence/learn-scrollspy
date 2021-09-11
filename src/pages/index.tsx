import clsx from 'clsx';
import * as React from 'react';

import useScrollSpy from '@/hooks/useScrollSpy';

import { headings } from '@/data/headings';

import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const activeSection = useScrollSpy();

  return (
    <>
      <Seo templateTitle='Home' />

      <main>
        <div className='bg-yellow-300 border p-2 inset-x-0 text-lg fixed top-0 text-center'>
          {activeSection}
        </div>
        <section>
          <div className='min-h-screen py-20 layout'>
            {headings.map((h, i) => (
              <div key={h.id} className={clsx('min-h-[70vh] mt-4 p-4', h.bg)}>
                <h2 id={h.id}>
                  <UnstyledLink className='hash-anchor' href={`/#${h.id}`}>
                    #
                  </UnstyledLink>{' '}
                  Heading {i + 1}
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam deleniti quis molestias cum? Adipisci modi nemo hic,
                  similique est eveniet mollitia ea? Laudantium praesentium
                  temporibus voluptatibus aperiam dolorum aliquid? Ratione?
                </p>
              </div>
            ))}
          </div>
          <div className={clsx('min-h-[70vh] mt-4 p-4', 'bg-green-200')}>
            <h2>footer</h2>
          </div>
        </section>
      </main>
    </>
  );
}
