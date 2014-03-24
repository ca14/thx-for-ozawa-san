var decoDisplay, logoDisplay;

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

$(document).ready(function() {
  $(".ca14-container").transition({
    y: "-400px"
  }, 500, "linear");
  setTimeout(logoDisplay, 1000);
  return setTimeout(decoDisplay, 1200);
});
