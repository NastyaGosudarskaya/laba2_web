
onmessage = function(event) {
  postMessage("Symbols: " + (event.data.length + 1))
}