import React, { memo } from "react";
import "./StatsStrip.css";

type Stat = {
  label: string;
  value: string;
  subLabel?: string;
};

type StatsStripProps = {
  stats: Stat[];
};

const StatItem = memo(({ stat }: { stat: Stat }) => (
  <div className="stat-item">
    <div className="stat-pill" />
    <div className="stat-value">{stat.value}</div>
    <div className="stat-label">{stat.label}</div>
    {stat.subLabel && <div className="stat-sublabel">{stat.subLabel}</div>}
  </div>
));

const StatsStrip: React.FC<StatsStripProps> = ({ stats }) => {
  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-strip-inner">
          {stats.map((s, i) => (
            <StatItem key={i} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(StatsStrip);
