import clsx from 'clsx';
import * as React from 'react';

import useScrollSpy from '@/hooks/useScrollSpy';

import { headings } from '@/data/headings';

import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

type TableOfContent = { id: string; level: number; text?: string };

export default function HomePage() {
  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState<Array<TableOfContent>>();

  React.useEffect(() => {
    const headings = document.querySelectorAll(
      '.layout h1, .layout h2, .layout h3'
    );

    const headingArr: Array<TableOfContent> = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level: number = +heading.tagName.replace('H', '');
      const text = heading.textContent?.slice(2);

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, []);

  return (
    <>
      <Seo templateTitle='Home' />

      <main>
        <div
          className={clsx(
            'bg-dark border p-2 text-lg items-start text-center flex flex-col w-full max-w-[300px]',
            'fixed right-0 top-0'
          )}
        >
          {toc ? (
            toc.map((item) => (
              <CustomLink
                key={item.id}
                href={`#${item.id}`}
                style={{ marginLeft: 20 * (item.level - 1) }}
                className={clsx({
                  'text-gray-500': item.id !== activeSection,
                  'text-primary-500': item.id === activeSection,
                })}
              >
                {item?.text}
              </CustomLink>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <section>
          <div className='min-h-screen py-20 layout'>
            {headings.map((h, i) => (
              <div key={h.id} className={clsx('min-h-[70vh] mt-4 p-4', h.bg)}>
                {i % 3 === 0 ? (
                  <h1 id={h.id}>
                    <UnstyledLink className='hash-anchor' href={`/#${h.id}`}>
                      #
                    </UnstyledLink>{' '}
                    Heading {i + 1}
                  </h1>
                ) : i % 3 === 1 ? (
                  <h2 id={h.id}>
                    <UnstyledLink className='hash-anchor' href={`/#${h.id}`}>
                      #
                    </UnstyledLink>{' '}
                    Heading {i + 1}
                  </h2>
                ) : (
                  <h3 id={h.id}>
                    <UnstyledLink className='hash-anchor' href={`/#${h.id}`}>
                      #
                    </UnstyledLink>{' '}
                    Heading {i + 1}
                  </h3>
                )}

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
