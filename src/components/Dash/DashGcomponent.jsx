import React from "react";
import styles from "./Dash.module.css";
import PieChart from "../Chart/PieChart";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function DashGcomponent() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainTitle}>
        <h3>DASHBOARD</h3>
      </div>

      <div className={styles.mainCards}>
        <div className={styles.card} style={{ backgroundColor: "#2962ff" }}>
          <div className={styles.cardInner}>
            <h3>Etablissements</h3>
            <BsFillGrid3X3GapFill className={styles.cardIcon} />
          </div>
          <h1>12</h1>
        </div>
        <div className={styles.card} style={{ backgroundColor: "#ff6d00" }}>
          <div className={styles.cardInner}>
            <h3>Niveau</h3>
            <BsPeopleFill className={styles.cardIcon} />
          </div>
          <h1>33</h1>
        </div>
        <div className={styles.card} style={{ backgroundColor: "#2e7d32" }}>
          <div className={styles.cardInner}>
            <h3>ALERTS</h3>
            <BsFillBellFill className={styles.cardIcon} />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className={styles.charts}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <PieChart />
    </main>
  );
}

export default DashGcomponent;
