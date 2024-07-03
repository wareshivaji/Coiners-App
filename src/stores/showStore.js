import axios from "axios";
import { create } from "zustand";

const showStore = create((set) => ({
  graphData: [],
  data: null,

  reset: () => {
    set({ graphData: [] });
  },

  fetchData: async (id) => {
    const [graphRes, dataRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}??tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
      ),
      // axios.get(`https://api.coingecko.com/api/v3/coins/${id}/history?date=30-12-2021`),
    ]);

    const graphData = graphRes.data.prices.map((price) => {
      const [timestamp, p] = price;
      // const options = { timeZone: "Asia/Kolkata" };
      const date = new Date(timestamp).toLocaleDateString("en-IN");
      return {
        Date: date,
        Price: p,
        data: null,
      };
    });

    // console.log(dataRes);
    set({ graphData });
    //after 1 hr of Efforts Missing Declartion of this line so unable to get the
    set({ data: dataRes.data });
  },
}));

export default showStore;
