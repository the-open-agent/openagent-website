import Link from 'next/link';
import {
  BotIcon,
  BrainIcon,
  DatabaseIcon,
  LayersIcon,
  MessageSquareIcon,
  PuzzleIcon,
  ServerIcon,
  ShieldIcon,
  ZapIcon,
} from 'lucide-react';

const features = [
  {
    icon: BotIcon,
    title: 'Intelligent Agents',
    description:
      'Build and deploy AI agents with full MCP (Model Context Protocol) support. Agents can use tools, call APIs, and reason across complex tasks.',
  },
  {
    icon: BrainIcon,
    title: '30+ Model Providers',
    description:
      'Seamlessly switch between OpenAI, Claude, Gemini, DeepSeek, Qwen, and 25+ more providers through a unified interface.',
  },
  {
    icon: DatabaseIcon,
    title: 'Knowledge Base',
    description:
      'Upload documents, PDFs, spreadsheets, and more. Your agents retrieve precise context from your knowledge base using semantic search.',
  },
  {
    icon: MessageSquareIcon,
    title: 'Multi-Channel Gateway',
    description:
      'Connect your agents to Telegram, Discord, Slack, WhatsApp, and 20+ messaging platforms from a single deployment.',
  },
  {
    icon: PuzzleIcon,
    title: 'Plugin Architecture',
    description:
      'Extend functionality with a flexible plugin system. Add custom tools, model providers, channels, and integrations.',
  },
  {
    icon: ShieldIcon,
    title: 'Enterprise Ready',
    description:
      'Built-in SSO via Casdoor, role-based access control, audit logs, and multi-tenant support for enterprise deployments.',
  },
];

const providers = [
  'OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen',
  'Mistral', 'Llama', 'Ollama', 'Azure', 'Bedrock',
  'Groq', 'OpenRouter',
];

const channels = [
  'Telegram', 'Discord', 'Slack', 'WhatsApp', 'Signal',
  'WeChat', 'Teams', 'Matrix', 'LINE', 'Feishu',
];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-28 text-center md:py-40">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-fd-primary/5 via-transparent to-transparent" />
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-fd-primary/10 blur-3xl" />
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-muted/50 px-4 py-1.5 text-sm text-fd-muted-foreground backdrop-blur-sm">
          <ZapIcon className="size-3.5 text-fd-primary" />
          Open Source · Self-Hosted · Enterprise Grade
        </div>

        <h1 className="mb-6 max-w-4xl bg-gradient-to-b from-fd-foreground to-fd-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
          The Open Agent Platform
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-fd-muted-foreground md:text-xl">
          OpenAgent is an open-source, enterprise-grade AI agent platform. Connect 30+ model
          providers, build intelligent agents with MCP tool use, and deploy across 20+ messaging
          channels — all from a single self-hosted deployment.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/quick-start"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-lg transition-all hover:bg-fd-primary/90 hover:shadow-fd-primary/25 hover:shadow-xl"
          >
            Get Started
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background/80 px-6 py-3 text-sm font-semibold text-fd-foreground backdrop-blur-sm transition-colors hover:bg-fd-muted"
          >
            View Docs
          </Link>
          <a
            href="https://github.com/the-open-agent/openagent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background/80 px-6 py-3 text-sm font-semibold text-fd-foreground backdrop-blur-sm transition-colors hover:bg-fd-muted"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-current">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t border-fd-border px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-fd-foreground md:text-4xl">
              Everything you need to build AI agents
            </h2>
            <p className="text-fd-muted-foreground">
              A complete platform for developing, deploying, and managing intelligent AI agents.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/50 hover:bg-fd-card/80"
              >
                <div className="mb-4 inline-flex rounded-lg bg-fd-primary/10 p-2.5 text-fd-primary">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="mb-2 font-semibold text-fd-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-fd-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="border-t border-fd-border bg-fd-muted/30 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                Up and running in minutes
              </h2>
              <p className="mb-6 text-fd-muted-foreground">
                Install OpenAgent with the one-line installer and have your first AI agent ready in
                minutes. No complex configuration required.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/docs/quick-start"
                  className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
                >
                  Install OpenAgent
                </Link>
                <Link
                  href="/docs/quick-start"
                  className="inline-flex items-center gap-2 rounded-lg border border-fd-border px-5 py-2.5 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-muted"
                >
                  Quick Start
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-background shadow-xl">
              <div className="flex items-center gap-2 border-b border-fd-border px-4 py-3">
                <div className="size-3 rounded-full bg-red-500/70" />
                <div className="size-3 rounded-full bg-yellow-500/70" />
                <div className="size-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-fd-muted-foreground">install.sh</span>
              </div>
              <pre className="overflow-x-auto p-5 text-sm">
                <code className="text-fd-foreground">
                  <span className="text-fd-muted-foreground"># Install OpenAgent</span>{'\n'}
                  {"curl -fsSL --proto '=https' --tlsv1.2 \\"}{'\n'}
                  {'  https://raw.githubusercontent.com/the-open-agent/openagent/master/scripts/install.sh | bash'}{'\n'}
                  {'\n'}
                  <span className="text-fd-muted-foreground"># Open the dashboard</span>{'\n'}
                  {'open http://localhost:14000'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="border-t border-fd-border px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-fd-foreground md:text-4xl">
              Connect your entire AI ecosystem
            </h2>
            <p className="text-fd-muted-foreground">
              Works with the models and channels you already use.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <LayersIcon className="size-5 text-fd-primary" />
                <h3 className="font-semibold text-fd-foreground">Model Providers</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {providers.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-fd-border bg-fd-muted/50 px-3 py-1 text-sm text-fd-muted-foreground"
                  >
                    {p}
                  </span>
                ))}
                <span className="rounded-full border border-fd-border bg-fd-muted/50 px-3 py-1 text-sm text-fd-muted-foreground">
                  +18 more
                </span>
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <MessageSquareIcon className="size-5 text-fd-primary" />
                <h3 className="font-semibold text-fd-foreground">Messaging Channels</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {channels.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-fd-border bg-fd-muted/50 px-3 py-1 text-sm text-fd-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
                <span className="rounded-full border border-fd-border bg-fd-muted/50 px-3 py-1 text-sm text-fd-muted-foreground">
                  +10 more
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-fd-border px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-lg bg-fd-primary/10 p-3 text-fd-primary">
            <ServerIcon className="size-6" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
            Self-host with full control
          </h2>
          <p className="mb-8 text-fd-muted-foreground">
            OpenAgent is fully open source and designed for self-hosting. Your data stays in your
            infrastructure. No vendor lock-in, no usage limits.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-lg transition-all hover:bg-fd-primary/90"
            >
              Read the Docs
            </Link>
            <a
              href="https://github.com/the-open-agent/openagent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border px-6 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-muted"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-fd-border px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <BotIcon className="size-5 text-fd-primary" />
            <span className="font-semibold text-fd-foreground">OpenAgent</span>
          </div>
          <p className="text-sm text-fd-muted-foreground">
            Open source under the Apache 2.0 License.{' '}
            <a
              href="https://github.com/the-open-agent/openagent"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-fd-foreground"
            >
              View on GitHub
            </a>
          </p>
          <div className="flex gap-4 text-sm text-fd-muted-foreground">
            <Link href="/docs" className="hover:text-fd-foreground">
              Docs
            </Link>
            <a
              href="https://github.com/the-open-agent/openagent/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fd-foreground"
            >
              Issues
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
