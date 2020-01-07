import Home from "../components/home";
import RepoDetail from "../components/RepoDetail";
import FetchData from "../fetchData";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/popular/:id",
    exact: true,
    component: RepoDetail,
    fetchData: (path = "") => {
      let repo = path.split("/").pop();
      return FetchData(repo);
    }
  }
];

export default routes;
