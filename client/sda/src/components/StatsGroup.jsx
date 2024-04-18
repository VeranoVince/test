import React from "react";
import { Text } from "@mantine/core";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faUser, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../css-assets/StatsGroup.css";

const data = [
  {
    title: "Unit Manager",
    stats: 7,
    description:
      "24% more than in the same month last year, 33% more than two years ago",
    icon: faDesktop,
  },
  {
    title: "Financial Advisors",
    stats: 150,
    description:
      "13% less compared to last month, new user engagement up by 6%",
    icon: faUser,
  },
  {
    title: "Branches",
    stats: 8,
    description: "1994 orders were completed this month, 97% satisfaction rate",
    icon: faGlobe,
  },
];

const formatter = (value) => <CountUp end={value} separator="," duration={3} />;

function StatsGroup() {
  const stats = data.map((stat) => (
    <div key={stat.title} className="stat">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={stat.icon} className="staticon" />
      </div>
      <div className="stats-info">
        <Text className="statscount">
          {formatter(stat.stats)}
          {stat.stats === 150 ? "+" : ""}
        </Text>
        <Text className="statstitle">{stat.title}</Text>
      </div>
    </div>
  ));

  return <div className="root">{stats}</div>;
}

export default StatsGroup;
