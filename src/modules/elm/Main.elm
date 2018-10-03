import Browser
import Html exposing (Html, button, div, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)

main =
  Browser.sandbox { init = 0, update = update, view = view }

type Msg = Increment | Decrement

update msg model =
  case msg of
    Increment ->
      model + 1

    Decrement ->
      model - 1

view model =
  div []
    [ button [ onClick Decrement, class "button is-pulled-left is-danger is-large" ] [ text "-" ]
    , div [ class "is-pulled-left box" ] [ text (String.fromInt model) ]
    , button [ onClick Increment, class "button is-pulled-left is-success is-large" ] [ text "+" ]
    ]