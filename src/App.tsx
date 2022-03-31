import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHeader } from "gitlanding/GlHeader";
import { GlArticle } from "gitlanding/GlArticle";
import { GlIllustration } from "gitlanding/GlIllustration";

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
          className={'main'}
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
                              language="haskell" />
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
        <GlArticle
            title="Elmish(Fable)"
            body={`Elmish define a core abstractions allowing you to build Fable application following the model view update style of architecture.`}
            illustration={
              <GlIllustration hasShadow={false}
                              type="code"
                              text={`type Model =
    { Value : string }
type Msg =
    | ChangeValue of string      
let init () =
    { Value = "" }, Cmd.none
let update (msg:Msg) (model:Model) =
    match msg with
    | ChangeValue newValue ->
        { model with Value = newValue }, Cmd.none                                                     
let view model dispatch =
    Html.div [
        Html.input [
            prop.value model.Value
            prop.onChange (fun value ->
                value |> ChangeValue |> dispatch
            )
        ]
        Html.span [
            prop.text $"Hello, %s{model.Value}!"
        ]
    ]`}
                              language="ocaml" />
            }
            hasAnimation={true}
            buttonLabel={'Home Page'}
            buttonLink={{href: "https://fable.io/"}}
        />
      </GlTemplate>
  );
}

export default App;
