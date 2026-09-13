import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calendar, ChevronDown, Frown, Meh, MessageSquare, Smile, Users } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { KpiCard } from "@/components/dashboard/KpiCard";
import {
  DonutChart,
  PlatformChart,
  StackedPlatformChart,
  TrendChart,
} from "@/components/dashboard/charts";
import {
  Insights,
  Legend,
  Panel,
  TopPosts,
  TopUsersList,
  WordCloud,
} from "@/components/dashboard/panels";
import {
  filterPosts,
  platformData,
  summarize,
  topLiked,
  topUsers,
  topicCounts,
  trendData,
} from "@/lib/analytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XPhone Social Media Sentiment Analysis Dashboard" },
      {
        name: "description",
        content:
          "Real-time XPhone customer sentiment and engagement dashboard: sentiment trends, top posts, topics and key insights from 49 Twitter posts.",
      },
      { property: "og:title", content: "XPhone Social Media Sentiment Analysis Dashboard" },
      {
        property: "og:description",
        content:
          "Track XPhone sentiment, engagement and trending topics across social posts in one dashboard.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const legendItems = [
  { label: "Positive", color: "var(--color-positive)" },
  { label: "Negative", color: "var(--color-negative)" },
  { label: "Neutral", color: "var(--color-neutralt)" },
];

function Dashboard() {
  const [active, setActive] = useState("overview");
  const [platform, setPlatform] = useState("All");
  const [sentiment, setSentiment] = useState("All");

  const list = useMemo(() => filterPosts(platform, sentiment), [platform, sentiment]);
  const s = useMemo(() => summarize(list), [list]);
  const trend = useMemo(() => trendData(list), [list]);
  const topics = useMemo(() => topicCounts(list), [list]);

  const donut = [
    { name: "Positive", value: s.positive, color: "var(--color-positive)" },
    { name: "Negative", value: s.negative, color: "var(--color-negative)" },
    { name: "Neutral", value: s.neutral, color: "var(--color-neutralt)" },
  ];

  function navigate(id: string) {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar
        active={active}
        onNavigate={navigate}
        platform={platform}
        onPlatformChange={setPlatform}
        sentiment={sentiment}
        onSentimentChange={setSentiment}
        totalPosts={s.total}
      />

      <main className="flex-1 overflow-x-hidden px-8 py-7">
        <header id="overview" className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Social Media Sentiment Analysis</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              <span className="font-semibold text-primary">XPhone</span> — Real-time customer
              sentiment &amp; engagement
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-2.5 text-sm">
            <Calendar className="size-4 text-muted-foreground" />
            <span>01 Jul 2024</span>
            <span className="text-muted-foreground">–</span>
            <span>01 Jul 2024</span>
            <ChevronDown className="size-4 text-muted-foreground" />
          </div>
        </header>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <KpiCard label="Total Posts" value={String(s.total)} icon={MessageSquare} tone="info" />
          <KpiCard
            label="Positive Sentiment"
            value={`${s.positivePct.toFixed(1)}%`}
            sub={`${s.positive} posts`}
            icon={Smile}
            tone="positive"
          />
          <KpiCard
            label="Negative Sentiment"
            value={`${s.negativePct.toFixed(1)}%`}
            sub={`${s.negative} posts`}
            icon={Frown}
            tone="negative"
          />
          <KpiCard
            label="Neutral Sentiment"
            value={`${s.neutralPct.toFixed(1)}%`}
            sub={`${s.neutral} posts`}
            icon={Meh}
            tone="neutral"
          />
          <KpiCard
            label="Total Engagement"
            value={String(s.engagement)}
            icon={Users}
            tone="violet"
          />
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.3fr_1fr_1fr]">
          <Panel id="trends" title="Sentiment Trend Over Time" right={<Legend items={legendItems} />}>
            <TrendChart data={trend} />
          </Panel>
          <Panel id="sentiment" title="Sentiment Distribution">
            <div className="grid grid-cols-[1.2fr_1fr] items-center gap-2">
              <DonutChart data={donut} total={s.total} />
              <ul className="space-y-3 text-sm">
                {donut.map((d) => (
                  <li key={d.name} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                      {d.name}
                    </span>
                    <span className="font-semibold">{d.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
          <Panel title="Posts by Platform">
            <PlatformChart data={platformData(list)} />
          </Panel>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.35fr_0.85fr_1fr_1fr]">
          <Panel title="Top 5 Most Liked Posts">
            <TopPosts posts={topLiked(list)} />
          </Panel>
          <Panel title="Sentiment by Platform" right={<Legend items={legendItems} />}>
            <StackedPlatformChart
              positive={Number(s.positivePct.toFixed(1))}
              neutral={Number(s.neutralPct.toFixed(1))}
              negative={Number(s.negativePct.toFixed(1))}
            />
          </Panel>
          <Panel id="word-cloud" title="Common Topics" suffix="(Word Cloud)">
            <WordCloud topics={topics} />
          </Panel>
          <Panel title="Key Insights">
            <Insights positivePct={s.positivePct} engagement={s.engagement} topics={topics} />
          </Panel>
        </div>

        <div className="mt-4">
          <Panel id="top-users" title="Top Users by Reach">
            <TopUsersList posts={topUsers(list)} />
          </Panel>
        </div>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <p>
            <span className="font-semibold text-primary">XPhone</span> | Listening to your thoughts.
            Building a better experience.
          </p>
          <p>Social Media Analytics Dashboard</p>
        </footer>
      </main>
    </div>
  );
}
