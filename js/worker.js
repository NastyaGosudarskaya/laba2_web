
onmessage = function(event) {
  var count_word=1;
  for (var i=0; i<event.data.length; i++)
  {
    if (event.data[i] == ' ' || event.data[i] == '\n')
    {
      count_word++;
    }
  }
  postMessage("Words: " + count_word)
}