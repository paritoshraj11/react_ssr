import axios from "axios";

const fetchData = async (path = "all") => {
  const url = `https://api.github.com/search/repositories?q=stars:>1+language:${path}&sort=stars&order=desc&type=Repositories`;
  try {
    let { data } = await axios.get(url);
    return data;
  } catch (err) {
    return new Error("Something is wrong when fetching data!!");
  }
};

export default fetchData;
