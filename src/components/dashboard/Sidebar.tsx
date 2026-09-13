import { BarChart3, Cloud, Database, Home, Smile, Twitter, Users } from "lucide-react";
import phoneMark from "@/assets/xphone-mark.png";

const nav = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "sentiment", label: "Sentiment Analysis", icon: Smile },
  { id: "trends", label: "Trends", icon: BarChart3 },
  { id: "top-users", label: "Top Users", icon: Users },
  { id: "word-cloud", label: "Word Cloud", icon: Cloud },
];

interface Props {
  active: string;
  onNavigate: (id: string) => void;
  platform: string;
  onPlatformChange: (v: string) => void;
  sentiment: string;
  onSentimentChange: (v: string) => void;
  totalPosts: number;
}

export function Sidebar({
  active,
  onNavigate,
  platform,
  onPlatformChange,
  sentiment,
  onSentimentChange,
  totalPosts,
}: Props) {
  return (
    <aside className="flex w-60 shrink-0 flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-3 px-5 py-6">
        <img src={phoneMark} alt="XPhone logo" className="size-11 rounded-xl" />
        <div>
          <p className="text-xl font-bold leading-none">XPhone</p>
          <p className="mt-1 text-[11px] text-sidebar-foreground/60">
            Better Tech. Brighter Days.
          </p>
        </div>
      </div>

      <nav className="space-y-1 px-3">
        {nav.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              active === id
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <Icon className="size-[18px]" />
            {label}
          </button>
        ))}
      </nav>

      <div className="mx-5 my-6 border-t border-sidebar-border" />

      <div className="space-y-4 px-5">
        <p className="text-base font-semibold">Filters</p>
        <div>
          <label className="text-xs text-sidebar-foreground/60">Platform</label>
          <select
            value={platform}
            onChange={(e) => onPlatformChange(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-sidebar-border bg-sidebar-accent px-3 py-2 text-sm text-sidebar-foreground outline-none focus:ring-2 focus:ring-sidebar-ring"
          >
            <option>All</option>
            <option>Twitter</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-sidebar-foreground/60">Sentiment</label>
          <select
            value={sentiment}
            onChange={(e) => onSentimentChange(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-sidebar-border bg-sidebar-accent px-3 py-2 text-sm text-sidebar-foreground outline-none focus:ring-2 focus:ring-sidebar-ring"
          >
            <option>All</option>
            <option>Positive</option>
            <option>Negative</option>
            <option>Neutral</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-sidebar-foreground/60">Date Range</label>
          <div className="mt-1.5 flex items-center justify-between rounded-lg border border-sidebar-border bg-sidebar-accent px-3 py-2 text-sm">
            <span>01-07-2024</span>
            <span className="text-sidebar-foreground/50">01-07-2024</span>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-4 px-5 py-6">
        <div className="border-t border-sidebar-border" />
        <div className="flex items-center gap-3">
          <Twitter className="size-5 text-sidebar-foreground/70" />
          <div className="text-xs">
            <p className="text-sidebar-foreground/60">Data Source</p>
            <p className="font-medium">Twitter</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Database className="size-5 text-sidebar-foreground/70" />
          <div className="text-xs">
            <p className="text-sidebar-foreground/60">Total Posts</p>
            <p className="font-medium">{totalPosts}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
