import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';

const sponsors = [
  {
    name: 'APIMart',
    url: 'https://go.apimart.ai/gh-openagent',
    logo: 'https://cdn.openagentai.org/img/sponsor_apimart.png',
    logoWidth: 2172,
    logoHeight: 724,
    body: 'APIMart is a low-cost API platform for AI image & video generation — GPT-Image-2 from $0.006/image, 160+ images per dollar. One async API covers both image and video: submit a task, get an ID, fetch results via polling or callback. Batch tens of thousands of images without timeouts, switch models without changing code. Pay-as-you-go with no monthly fee.',
  },
];

export function Sponsors() {
  return (
    <section className="border-b border-fd-border px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-fd-primary">
            {'// sponsors'}
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
            Backed by our sponsors
          </h2>
          <p className="mx-auto max-w-xl text-fd-muted-foreground">
            OpenAgent is free and open source. These companies help keep it that way.{' '}
            <a href="mailto:admin@casibase.org" className="text-fd-foreground underline underline-offset-4 transition-colors hover:text-fd-primary">
              Want to appear here?
            </a>
          </p>
        </div>

        <div className="space-y-6">
          {sponsors.map((s) => (
            <div key={s.name}
              className="grid items-center gap-8 rounded-2xl border border-fd-border bg-fd-card p-8 md:grid-cols-[260px_1fr] md:p-10"
            >
              <a href={s.url} target="_blank" rel="noopener noreferrer sponsored"
                className="flex items-center justify-center rounded-xl bg-white p-5 transition-transform hover:scale-[1.02]"
                aria-label={s.name}
              >
                <Image src={s.logo} alt={s.name} width={s.logoWidth} height={s.logoHeight} className="h-auto w-full" />
              </a>
              <div>
                <p className="mb-5 text-sm leading-relaxed text-fd-muted-foreground">
                  Thanks to{' '}
                  <a href={s.url} target="_blank" rel="noopener noreferrer sponsored"
                    className="font-semibold text-fd-foreground transition-colors hover:text-fd-primary"
                  >
                    {s.name}
                  </a>
                  {' '}for sponsoring this project! {s.body}
                </p>
                <a href={s.url} target="_blank" rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 rounded-xl border border-fd-border px-5 py-2.5 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
                >
                  Sign up here <ArrowRightIcon className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
