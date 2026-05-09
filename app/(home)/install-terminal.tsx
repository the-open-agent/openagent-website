'use client';

import { useEffect, useState } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';

type InstallOS = 'macos' | 'windows' | 'linux';

const installOptions: Record<
  InstallOS,
  {
    label: string;
    shell: string;
    prompt: string;
    lines: string[];
    copyCommand: string;
    launchCommand: string;
  }
> = {
  macos: {
    label: 'macOS',
    shell: 'bash',
    prompt: '$',
    lines: [
      'curl -fsSL \\',
      'https://raw.githubusercontent.com/the-open-agent/openagent/master/scripts/install.sh | bash',
    ],
    copyCommand: 'curl -fsSL https://raw.githubusercontent.com/the-open-agent/openagent/master/scripts/install.sh | bash',
    launchCommand: 'open http://localhost:14000',
  },
  windows: {
    label: 'Windows',
    shell: 'PowerShell',
    prompt: 'PS>',
    lines: [
      'irm https://raw.githubusercontent.com/the-open-agent/openagent/master/scripts/install.ps1 | iex',
    ],
    copyCommand: 'irm https://raw.githubusercontent.com/the-open-agent/openagent/master/scripts/install.ps1 | iex',
    launchCommand: 'start http://localhost:14000',
  },
  linux: {
    label: 'Linux',
    shell: 'bash',
    prompt: '$',
    lines: [
      'curl -fsSL \\',
      'https://raw.githubusercontent.com/the-open-agent/openagent/master/scripts/install.sh | bash',
    ],
    copyCommand: 'curl -fsSL https://raw.githubusercontent.com/the-open-agent/openagent/master/scripts/install.sh | bash',
    launchCommand: 'xdg-open http://localhost:14000',
  },
};

function detectOS(): InstallOS {
  const nav = navigator as Navigator & {
    userAgentData?: {
      platform?: string;
    };
  };
  const platform = `${nav.userAgentData?.platform ?? navigator.platform} ${navigator.userAgent}`.toLowerCase();

  if (platform.includes('win')) return 'windows';
  if (platform.includes('mac')) return 'macos';
  if (platform.includes('linux') || platform.includes('x11')) return 'linux';

  return 'macos';
}

export function InstallTerminal() {
  const [selectedOS, setSelectedOS] = useState<InstallOS>('macos');
  const [copied, setCopied] = useState(false);
  const selected = installOptions[selectedOS];

  useEffect(() => {
    setSelectedOS(detectOS());
  }, []);

  useEffect(() => {
    setCopied(false);
  }, [selectedOS]);

  async function copyInstallCommand() {
    await navigator.clipboard.writeText(selected.copyCommand);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-fd-border bg-fd-card shadow-2xl">
      <div className="flex flex-col gap-3 border-b border-fd-border bg-fd-muted/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-yellow-400/80" />
          <span className="size-3 rounded-full bg-green-400/80" />
          <span className="ml-3 font-mono text-xs text-fd-muted-foreground">{selected.shell}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-3 rounded-lg border border-fd-border bg-fd-card p-1">
            {(Object.keys(installOptions) as InstallOS[]).map((os) => {
              const active = os === selectedOS;

              return (
                <button
                  key={os}
                  type="button"
                  onClick={() => setSelectedOS(os)}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                    active
                      ? 'bg-fd-primary text-fd-primary-foreground shadow-sm'
                      : 'text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-foreground'
                  }`}
                  aria-pressed={active}
                >
                  {installOptions[os].label}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={copyInstallCommand}
            className="inline-flex size-8 items-center justify-center rounded-lg border border-fd-border bg-fd-card text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-foreground"
            aria-label="Copy install command"
            title="Copy install command"
          >
            {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
          </button>
        </div>
      </div>
      <div className="p-5 font-mono text-sm leading-7">
        <p className="flex gap-2">
          <span className="select-none text-fd-muted-foreground">{selected.prompt}</span>
          <span className="min-w-0 break-all text-fd-foreground">{selected.lines[0]}</span>
        </p>
        {selected.lines.slice(1).map((line) => (
          <p key={line} className="break-all pl-8 text-fd-muted-foreground/80">
            {line}
          </p>
        ))}
        <p className="mt-3 text-fd-muted-foreground"># Pulling OpenAgent...</p>
        <p className="text-fd-muted-foreground"># Configuring services...</p>
        <p className="text-fd-muted-foreground"># Running database migrations...</p>
        <p className="mt-1 font-semibold" style={{ color: 'var(--green)' }}>OpenAgent is ready!</p>
        <p className="mt-3 flex gap-2">
          <span className="select-none text-fd-muted-foreground">{selected.prompt}</span>
          <span className="min-w-0 break-all text-fd-foreground">{selected.launchCommand}</span>
        </p>
        <p className="mt-1 text-fd-muted-foreground"># Dashboard running</p>
      </div>
    </div>
  );
}
