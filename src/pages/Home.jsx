import React from "react";
import homeStore from "../stores/homeStore";
import Header from "../components/header";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";
import classNames from "classnames";

export default function Home() {
  const store = homeStore();

  React.useEffect(() => {
    if (store.trending.length === 0) store.fetchCoins();
  }, []);

  return (
    <div>
      <Header />
      <header className="home-search">
        <div className="width">
          <h2>Search for a Coins !</h2>
          <div
            className={classNames("home-search-input", {
              searching: store.searching,
            })}
          >
            <input type="text" value={store.query} onChange={store.setQuery} />

            {/* for the loading svcreen  */}
            <svg width="40px" height="40px" viewBox="0 0 50 50">
              <path
                fill="#1abc9c"
                d="M25,48C12.317,48,2,37.683,2,25S12.317,2,25,2s23,10.317,23,23S37.683,48,25,48z M25,5C13.729,5,5,13.729,5,25
        s8.729,20,20,20s20-8.729,20-20S36.271,5,25,5z"
              />
              <path
                fill="#fff"
                d="M40.15,28.13c-1.69,10.22-9.9,18.15-20.15,18.15c-11.05,0-20-8.95-20-20s8.95-20,20-20c7.88,0,14.66,4.52,18,11.08
        l-2.91,1.7C30.37,12.25,28.4,11,25.99,11c-8.82,0-16,7.18-16,16s7.18,16,16,16s16-7.18,16-16c0-1.31-0.16-2.59-0.46-3.81
        L40.15,28.13z"
              >
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-cryptos">
        <div className="width">
          <h2> {store.searched ? "Searched results" : "Trending Coins"} </h2>
          <div class="home-cryptos-list">
            {store.coins.map((coin) => {
              return <ListItem key={coin.id} coin={coin} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
