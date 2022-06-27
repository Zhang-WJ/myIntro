import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHeader } from "gitlanding/GlHeader";
import { RouteProvider, useRoute, routes } from "./router";
import { Home } from "./pages/Home";
import {PearlsAlgorithm} from "./pages/PearlsAlgorithm"

function App() {
  const route = useRoute();

  return (
      <GlTemplate
          header={
            <GlHeader
                title={
                  <a {...routes.home().link}>
                      <h1>Welcome FP for frontend!</h1>
                  </a>
              }
              links={[
                  {
                      "label": "Algorithm Design",
                      ...routes["pearls-algorithm"]().link,
                  },
                  
              ]}
                enableDarkModeSwitch={true}
                githubRepoUrl="https://github.com/Zhang-WJ/myIntro"
                githubButtonSize="large"
            />
          }
          className={'main'}
         
          headerOptions={{
            "position": "fixed",
            "isRetracted": "smart",
          }}
      >
        {route.name === "home" && <Home />}
        {route.name === "pearls-algorithm" && <PearlsAlgorithm />}
      </GlTemplate>
  );
}

export default App;
