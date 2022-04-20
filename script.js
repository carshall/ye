const url = "https://api.kanye.rest/";
document.getElementById("quote-refresh").addEventListener("click", function(event) {
  event.preventDefault();
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<h3>' + json.quote + "</h3>";
      document.getElementById("new-quote").innerHTML = results;
    })
  })
