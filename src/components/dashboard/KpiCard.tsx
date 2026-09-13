import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react";

interface Props {
  label: string;
  value: string;
  sub?: string;
  delta?: { value: string; up: boolean };
  icon: LucideIcon;
  tone: "info" | "positive" | "negative" | "neutral" | "violet";
}

const tones = {
  info: { card: "bg-info-soft", chip: "bg-info text-primary-foreground" },
  positive: { card: "bg-positive-soft", chip: "bg-positive text-positive-foreground" },
  negative: { card: "bg-negative-soft", chip: "bg-negative text-negative-foreground" },
  neutral: { card: "bg-neutralt-soft", chip: "bg-neutralt text-primary-foreground" },
  violet: { card: "bg-violet-soft", chip: "bg-violet text-primary-foreground" },
};

export function KpiCard({ label, value, sub, delta, icon: Icon, tone }: Props) {
  const t = tones[tone];
  return (
    <div className={`rounded-xl border border-border p-4 ${t.card}`}>
      <div className="flex items-center gap-3">
        <span className={`flex size-10 shrink-0 items-center justify-center rounded-full ${t.chip}`}>
          <Icon className="size-5" />
        </span>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="text-3xl font-bold leading-tight">{value}</p>
        </div>
      </div>
      {sub ? <p className="mt-2 text-xs text-muted-foreground">{sub}</p> : null}
      {delta ? (
        <p
          className={`mt-2 flex items-center gap-1 text-xs font-semibold ${
            delta.up ? "text-positive" : "text-negative"
          }`}
        >
          {delta.up ? <ArrowUp className="size-3.5" /> : <ArrowDown className="size-3.5" />}
          {delta.value}
          <span className="font-normal text-muted-foreground">vs. previous period</span>
        </p>
      ) : null}
    </div>
  );
}
