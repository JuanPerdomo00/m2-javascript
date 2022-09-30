// var whiteboard = window.whiteboard;
const { whiteboard } = require("./whiteboard");
// var socket = window.io(window.location.origin);
const socket = require("socket.io-client");

const sockIo = socket.io(location.origin);

sockIo.on("connect", function () {
  console.log("Connected!");
});

sockIo.on("load", function (strokes) {
  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    whiteboard.draw(start, end, color, false);
  });
});

sockIo.on("draw", function (start, end, color) {
  whiteboard.draw(start, end, color, false);
});

whiteboard.on("draw", function (start, end, color) {
  sockIo.emit("draw", start, end, color);
});
