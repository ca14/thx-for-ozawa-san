var decoDisplay, displayAll, loadHandler, loadedImages, logoDisplay;

loadedImages = 0;

logoDisplay = function() {
  return $(".logo-container").transition({
    y: "200px"
  }, 500, "linear");
};

decoDisplay = function() {
  return $(".deco-container").transition({
    opacity: 1
  }, 500, "linear");
};

displayAll = function() {
  $(".ca14-container").transition({
    y: "-400px"
  }, 500, "linear");
  setTimeout(logoDisplay, 1000);
  return setTimeout(decoDisplay, 1200);
};

loadHandler = function() {
  loadedImages++;
  if (loadedImages === 2) {
    return displayAll();
  }
};

$(document).ready(function() {
  return $("img").load(loadHandler);
});
