import { AlertTriangle, Heart, Lightbulb, Repeat2, Smile, TrendingUp } from "lucide-react";
import { formatTime12h, type Post } from "@/data/posts";

export function Panel({
  title,
  suffix,
  right,
  children,
  className = "",
  id,
}: {
  title: string;
  suffix?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`card-surface p-5 ${className}`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-semibold">
          {title}
          {suffix ? <span className="ml-1.5 font-normal text-muted-foreground">{suffix}</span> : null}
        </h2>
        {right}
      </div>
      {children}
    </section>
  );
}

export function Legend({ items }: { items: { label: string; color: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
      {items.map((i) => (
        <span key={i.label} className="flex items-center gap-1.5">
          <span className="size-2 rounded-full" style={{ backgroundColor: i.color }} />
          {i.label}
        </span>
      ))}
    </div>
  );
}

const badgeTone: Record<string, string> = {
  Positive: "bg-positive-soft text-positive",
  Negative: "bg-negative-soft text-negative",
  Neutral: "bg-neutralt-soft text-neutralt",
};

export function TopPosts({ posts }: { posts: Post[] }) {
  return (
    <ul className="divide-y divide-border">
      {posts.map((p, i) => (
        <li key={p.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
            {i + 1}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{p.text}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {p.user} · {formatTime12h(p.time)}
            </p>
          </div>
          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${badgeTone[p.sentiment]}`}>
            {p.sentiment}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Heart className="size-4 text-negative" />
            {p.likes}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Repeat2 className="size-4" />
            {p.retweets}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TopUsersList({ posts }: { posts: Post[] }) {
  return (
    <ul className="space-y-3">
      {posts.map((p) => (
        <li key={p.id} className="flex items-center gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-info-soft text-xs font-semibold text-info">
            {p.user.replace("user_", "")}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">{p.user}</p>
            <p className="truncate text-xs text-muted-foreground">{p.text}</p>
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {p.followers.toLocaleString()} followers
          </span>
        </li>
      ))}
    </ul>
  );
}

const cloudColors = [
  "var(--color-info)",
  "var(--color-positive)",
  "var(--color-negative)",
  "var(--color-violet)",
  "var(--color-neutralt)",
];

export function WordCloud({ topics }: { topics: { topic: string; count: number }[] }) {
  const max = Math.max(...topics.map((t) => t.count), 1);
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      {topics.map((t, i) => (
        <span
          key={t.topic}
          className="font-semibold leading-tight"
          style={{
            fontSize: `${0.85 + (t.count / max) * 1.9}rem`,
            color: cloudColors[i % cloudColors.length],
          }}
          title={`${t.topic}: ${t.count} mentions`}
        >
          {t.topic}
        </span>
      ))}
    </div>
  );
}

export function Insights({
  positivePct,
  engagement,
  topics,
}: {
  positivePct: number;
  engagement: number;
  topics: { topic: string; count: number; positive: number; negative: number }[];
}) {
  const best = [...topics]
    .filter((t) => t.positive > t.negative)
    .sort((a, b) => b.positive - a.positive)
    .slice(0, 3)
    .map((t) => t.topic);
  const worst = [...topics]
    .filter((t) => t.negative > t.positive)
    .sort((a, b) => b.negative - a.negative)
    .slice(0, 3)
    .map((t) => t.topic);

  const recommendation =
    worst.length > 0
      ? `Focus on ${worst.join(" and ")} to address the most common complaints and lift satisfaction.`
      : "No dominant complaint areas detected — keep monitoring feedback as volume grows.";

  const items = [
    {
      icon: Smile,
      tone: "text-positive bg-positive-soft",
      title: positivePct >= 50 ? "Overall Sentiment is Positive" : "Sentiment is Mixed",
      body: `${positivePct.toFixed(1)}% of the posts are positive, with high engagement (${engagement} total).`,
    },
    {
      icon: TrendingUp,
      tone: "text-info bg-info-soft",
      title: "Top Positive Topics",
      body: `${best.join(", ") || "None"} are the most appreciated areas.`,
    },
    {
      icon: AlertTriangle,
      tone: "text-negative bg-negative-soft",
      title: "Key Concerns",
      body: `${worst.join(", ") || "None"} drive most of the complaints.`,
    },
    {
      icon: Lightbulb,
      tone: "text-violet bg-violet-soft",
      title: "Recommendation",
      body: recommendation,
    },
  ];

  return (
    <div className="space-y-4">
      {items.map(({ icon: Icon, tone, title, body }) => (
        <div key={title} className="flex gap-3">
          <span className={`flex size-8 shrink-0 items-center justify-center rounded-full ${tone}`}>
            <Icon className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
