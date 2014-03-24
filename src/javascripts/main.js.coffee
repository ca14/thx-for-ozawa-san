logoDisplay = ->
  $(".logo-container").transition
    y: "200px"
  , 500, "linear"

decoDisplay = ->
  $(".deco-container").transition
    opacity: 1
  , 500, "linear"

$(document).ready ->
  $(".ca14-container").transition
    y: "-400px"
  , 500, "linear"

  setTimeout logoDisplay, 1000
  setTimeout decoDisplay, 1200
