import {
  Area,
  Bar,
  BarChart,
  Cell,
  ComposedChart,
  Legend as RechartsLegend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

const axis = {
  stroke: "var(--color-muted-foreground)",
  fontSize: 11,
  tickLine: false,
  axisLine: false,
};

const tooltipStyle = {
  contentStyle: {
    borderRadius: 10,
    border: "1px solid var(--color-border)",
    background: "var(--color-card)",
    fontSize: 12,
    color: "var(--color-foreground)",
  },
};

export function TrendChart({
  data,
}: {
  data: { time: string; Positive: number; Negative: number; Neutral: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <ComposedChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="posFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-positive)" stopOpacity={0.25} />
            <stop offset="100%" stopColor="var(--color-positive)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" interval={4} {...axis} />
        <YAxis {...axis} />
        <Tooltip {...tooltipStyle} />
        <Area
          type="monotone"
          dataKey="Positive"
          stroke="var(--color-positive)"
          strokeWidth={2}
          fill="url(#posFill)"
          dot={{ r: 2.5, fill: "var(--color-positive)", strokeWidth: 0 }}
        />
        <Line
          type="monotone"
          dataKey="Neutral"
          stroke="var(--color-neutralt)"
          strokeWidth={2}
          dot={{ r: 2.5, fill: "var(--color-neutralt)", strokeWidth: 0 }}
        />
        <Line
          type="monotone"
          dataKey="Negative"
          stroke="var(--color-negative)"
          strokeWidth={2}
          dot={{ r: 2.5, fill: "var(--color-negative)", strokeWidth: 0 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export function DonutChart({
  data,
  total,
}: {
  data: { name: string; value: number; color: string }[];
  total: number;
}) {
  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={230}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="65%"
            outerRadius="90%"
            paddingAngle={1}
            stroke="none"
          >
            {data.map((d) => (
              <Cell key={d.name} fill={d.color} />
            ))}
          </Pie>
          <Tooltip {...tooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold">{total}</span>
        <span className="text-xs text-muted-foreground">Total Posts</span>
      </div>
    </div>
  );
}

export function PlatformChart({ data }: { data: { name: string; count: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={230}>
      <BarChart data={data} margin={{ top: 20, right: 8, left: -20, bottom: 0 }}>
        <XAxis dataKey="name" {...axis} />
        <YAxis {...axis} />
        <Tooltip {...tooltipStyle} cursor={{ fill: "var(--color-muted)" }} />
        <Bar dataKey="count" radius={[4, 4, 0, 0]} maxBarSize={46}>
          {data.map((d) => (
            <Cell key={d.name} fill="var(--color-info)" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

const sentimentColor: Record<string, string> = {
  Positive: "var(--color-positive)",
  Negative: "var(--color-negative)",
  Neutral: "var(--color-neutralt)",
};

export function AvgBySentimentChart({
  data,
}: {
  data: { sentiment: string; avgLikes: number; avgRetweets: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={230}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <XAxis dataKey="sentiment" {...axis} />
        <YAxis {...axis} />
        <Tooltip {...tooltipStyle} cursor={{ fill: "var(--color-muted)" }} />
        <RechartsLegend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="avgLikes" name="Avg Likes" fill="var(--color-info)" radius={[4, 4, 0, 0]} maxBarSize={36} />
        <Bar dataKey="avgRetweets" name="Avg Retweets" fill="var(--color-violet)" radius={[4, 4, 0, 0]} maxBarSize={36} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function FollowersLikesScatter({
  data,
}: {
  data: { followers: number; likes: number; sentiment: string }[];
}) {
  const bySentiment = ["Positive", "Negative", "Neutral"].map((sentiment) => ({
    sentiment,
    points: data.filter((d) => d.sentiment === sentiment),
  }));

  return (
    <ResponsiveContainer width="100%" height={260}>
      <ScatterChart margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <XAxis
          type="number"
          dataKey="followers"
          name="Followers"
          {...axis}
        />
        <YAxis type="number" dataKey="likes" name="Likes" {...axis} />
        <ZAxis range={[60, 60]} />
        <Tooltip {...tooltipStyle} cursor={{ strokeDasharray: "3 3" }} />
        <RechartsLegend wrapperStyle={{ fontSize: 12 }} />
        {bySentiment.map((s) => (
          <Scatter
            key={s.sentiment}
            name={s.sentiment}
            data={s.points}
            fill={sentimentColor[s.sentiment]}
          />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export function StackedPlatformChart({
  positive,
  neutral,
  negative,
}: {
  positive: number;
  neutral: number;
  negative: number;
}) {
  const data = [{ name: "Twitter", Positive: positive, Neutral: neutral, Negative: negative }];
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: 4, bottom: 0 }}>
        <XAxis dataKey="name" {...axis} />
        <YAxis
          {...axis}
          domain={[0, 100]}
          ticks={[0, 25, 50, 75, 100]}
          width={40}
          tickFormatter={(v) => `${v}%`}
        />
        <Tooltip {...tooltipStyle} cursor={{ fill: "var(--color-muted)" }} />
        <Bar dataKey="Positive" stackId="s" fill="var(--color-positive)" maxBarSize={90} />
        <Bar dataKey="Neutral" stackId="s" fill="var(--color-neutralt)" maxBarSize={90} />
        <Bar
          dataKey="Negative"
          stackId="s"
          fill="var(--color-negative)"
          maxBarSize={90}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
