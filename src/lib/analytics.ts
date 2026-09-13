import { posts as allPosts, topicKeywords, type Post, type Sentiment } from "@/data/posts";

export function filterPosts(platform: string, sentiment: string): Post[] {
  return allPosts.filter(
    (p) =>
      (platform === "All" || p.platform === platform) &&
      (sentiment === "All" || p.sentiment === sentiment),
  );
}

export function summarize(list: Post[]) {
  const total = list.length;
  const count = (s: Sentiment) => list.filter((p) => p.sentiment === s).length;
  const positive = count("Positive");
  const negative = count("Negative");
  const neutral = count("Neutral");
  const engagement = list.reduce((sum, p) => sum + p.likes + p.retweets, 0);
  const pct = (n: number) => (total ? (n / total) * 100 : 0);
  return {
    total,
    positive,
    negative,
    neutral,
    engagement,
    positivePct: pct(positive),
    negativePct: pct(negative),
    neutralPct: pct(neutral),
  };
}

export function trendData(list: Post[]) {
  const sorted = [...list].sort((a, b) => a.time.localeCompare(b.time));
  let p = 0;
  let n = 0;
  let u = 0;
  return sorted.map((post) => {
    if (post.sentiment === "Positive") p += 1;
    else if (post.sentiment === "Negative") n += 1;
    else u += 1;
    return { time: post.time, Positive: p, Negative: n, Neutral: u };
  });
}

export function topLiked(list: Post[], n = 5) {
  return [...list].sort((a, b) => b.likes - a.likes).slice(0, n);
}

export function topUsers(list: Post[], n = 6) {
  return [...list]
    .sort((a, b) => b.followers - a.followers || b.likes - a.likes)
    .slice(0, n);
}

export function platformData(list: Post[]) {
  const platforms = ["Twitter", "Facebook", "Instagram", "YouTube", "Others"];
  return platforms.map((name) => ({
    name,
    count: list.filter((p) => p.platform === name).length,
  }));
}

export function topicCounts(list: Post[]) {
  const entries = Object.entries(topicKeywords).map(([topic, keys]) => {
    const matched = list.filter((p) =>
      keys.some((k) => p.text.toLowerCase().includes(k)),
    );
    return {
      topic,
      count: matched.length,
      positive: matched.filter((p) => p.sentiment === "Positive").length,
      negative: matched.filter((p) => p.sentiment === "Negative").length,
    };
  });
  return entries.filter((e) => e.count > 0).sort((a, b) => b.count - a.count);
}
