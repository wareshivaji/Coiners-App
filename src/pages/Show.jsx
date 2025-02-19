import React from "react";
import { useParams } from "react-router-dom";
import showStore from "../stores/showStore";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import Header from "../components/header";

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

export default function Show() {
  const store = showStore();
  const params = useParams();

  React.useEffect(() => {
    store.fetchData(params.id);

    return () => {
      store.reset();
    };
  }, []);

  // if (!store.data) return <></>;
  return (
    <div>
      <Header back />
      {store.data && (
        <>
          <header className="show-header">
            <img src={store.data.image.large} />
            <h2>
              {store.data.name} ({store.data.symbol})
            </h2>
          </header>
          <div className="width">
            <div className="show-graph">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={store.graphData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="Date" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Price"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="show-details">
            <div className="width">
              <h2>Details</h2>
              <div className="show-details-row">
                <h3> Market cap </h3>
                <span>{store.data.market_cap_rank}</span>
              </div>
              <div className="show-details-row">
                <h3> 24h high </h3>
                <span>${store.data.market_data.high_24h.usd} </span>
              </div>
              <div className="show-details-row">
                <h3> 24h low </h3>
                <span>${store.data.market_data.low_24h.usd} </span>
              </div>
              <div className="show-details-row">
                <h3> Circulating supply </h3>
                <span>${store.data.market_data.circulating_supply} </span>
              </div>
              <div className="show-details-row">
                <h3> Current Price </h3>
                <span>${store.data.market_data.current_price.usd} </span>
                {/* <span>₹{store.data.market_data.current_price.inr} </span> */}
              </div>
              <div className="show-details-row">
                <h3> 1y Change </h3>
                <span>
                  $
                  {store.data.market_data.price_change_percentage_1y.toFixed(2)}
                  %
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
