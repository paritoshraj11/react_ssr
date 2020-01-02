import Home from "../components/home";
import RepoDetail from "../components/RepoDetail";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/popular/:id",
    exact: true,
    component: RepoDetail
  }
];

export default routes;
