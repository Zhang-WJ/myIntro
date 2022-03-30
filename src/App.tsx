import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHeader } from "gitlanding/GlHeader";
import { GlHero } from "gitlanding/GlHero";
import { GlArticle } from "gitlanding/GlArticle";
import { GlIllustration } from "gitlanding/GlIllustration";
import { GlFooter } from "gitlanding/GlFooter";
import { GlSectionDivider } from "gitlanding/GlSectionDivider";
import { GlCards } from "gitlanding/GlCards";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import { GlProjectCard } from "gitlanding/GlCards/GlProjectCard";
import { GlCheckList } from "gitlanding/GlCheckList";
import { GlSlider } from "gitlanding/GlSlider";
import { GlReviewSlide } from "gitlanding/GlReviewSlide";

function App() {
  return (
      <GlTemplate
          header={
            <GlHeader
                title="Welcome FP for frontend!"
                links={[]}
                enableDarkModeSwitch={true}
                githubRepoUrl="https://github.com/Zhang-WJ/myIntro"
                githubButtonSize="large"
            />
          }
          headerOptions={{
            "position": "fixed",
            "isRetracted": "smart",
          }}
      >
        <GlArticle
            title="Elm language"
            body={`A delightful language
                  for reliable web applications.`}
            illustration={
              <GlIllustration hasShadow={false}
                              type="code"
                              text={`init : ( Model, Cmd Msg )
update : Msg -> Model -> ( Model, Cmd Msg )                                                                                
subscriptions : Model -> Sub Msg
view : Model -> Html Msg`}
                              language="javascript" />
            }
            hasAnimation={true}
            buttonLabel={'Home Page'}
            buttonLink={{href: "https://elm-lang.org/"}}
        />
        <GlArticle
            title="Purescript"
            body={`A strongly-typed functional programming language that compiles to JavaScript`}
            illustration={
              <GlIllustration hasShadow={false}
                              type="code"
                              text={`import Prelude
import Effect.Console (log)                                                                                                               

greet :: String -> String
greet name = "Hello, " <> name <> "!"

main = log (greet "World")`}
                              language="purescript" />
            }
            hasAnimation={true}
            buttonLabel={'Home Page'}
            buttonLink={{href: "https://www.purescript.org/"}}
        />

        <GlArticle
            title="Joo"
            body={`Js_of_ocaml is a compiler from OCaml bytecode programs to JavaScript. It makes it possible to run pure OCaml programs in JavaScript environment like browsers and Node.js.`}
            illustration={
              <GlIllustration hasShadow={false}
                              type="code"
                              text={`open Js_of_ocaml
module Html = Dom_html
let js = Js.string
let document = Html.window##.document

let create_canvas width height =
  let canvas = Html.createCanvas document in
  canvas##.width := width;
  canvas##.height := height;
  canvas##.style##.border := (js "1px solid #000000");
  canvas
let start _ =
  let main = Js.Opt.get (document##getElementById (js "app")) (fun () -> assert false) in
  let canvas = create_canvas 500 500 in
  let canvas_context = canvas##getContext Html._2d_ in
  ignore @@ draw_square canvas_context 200. 200. 50. 50.;
  Dom.appendChild main canvas;
  Js._false

let () = Html.window##.onload := Html.handler start`}
                              language="ocaml" />
            }
            hasAnimation={true}
            buttonLabel={'Home Page'}
            buttonLink={{href: "https://ocsigen.org/js_of_ocaml/latest/manual/overview"}}
        />
      </GlTemplate>
  );
}

export default App;
