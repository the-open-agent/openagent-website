import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="https://cdn.openagentai.org/img/openagent-logo_1900x450.png"
            alt={appName}
            width={190}
            height={45}
            style={{ height: '30px', width: 'auto' }}
            priority
            unoptimized
            className="dark:hidden"
          />
          <Image
            src="https://cdn.openagentai.org/img/openagent-logo_1900x450.png"
            alt={appName}
            width={190}
            height={45}
            style={{ height: '30px', width: 'auto' }}
            priority
            unoptimized
            className="hidden dark:block"
          />
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        text: 'Docs',
        url: '/docs',
        active: 'nested-url',
      },
    ],
  };
}
