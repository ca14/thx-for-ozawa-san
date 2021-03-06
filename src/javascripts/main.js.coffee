loadedImages = 0

logoDisplay = ->
  $(".logo-container").transition
    y: "200px"
  , 800, "linear"

decoDisplay = ->
  $(".deco-container").transition
    opacity: 1
  , 800, "linear"

displayAll = ->
  $(".ca14-container").transition
    y: "-400px"
  , 800, "linear"

  setTimeout logoDisplay, 1000
  setTimeout decoDisplay, 1200

loadHandler = ->
  loadedImages++
  displayAll() if loadedImages is 2

$(document).ready ->
  $("img").load loadHandler
