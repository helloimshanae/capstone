let searchBox = document.getElementById("character-search");
let goButton = document.getElementById("search-button");

async function loadRecords(limit) {
  let response = await fetch("https://student-data-api.sahadeo-shanae.workers.dev/api/v1/datasets/DC-Comics-Characters/records?search=" + searchBox.value + "&limit=" + limit);
  console.log("Status: " + response.status);

  let data = await response.json();
  let records = data.records;
  console.log("Records: " + records.length);

  let text = "";

  records.forEach(function (record) {
    text = text + "<article>";
	text = text + "<h3>" + record.Name + "</h3>";
	text = text + "<p><b>APPEARANCES:</b> " + record["APPEARANCES"] + "</p>";
	text = text + "<p><b>FIRST APPEARANCE:</b> " + record["FIRST APPEARANCE"] + "</p>";
	text = text + "<p><b>HAIR COLOR:</b> " + record["HAIR"] + "</p>";
	text = text + "<p><b>EYE COLOR:</b> " + record["EYE"] + "</p>"
	text = text + "</article>";
  });

  document.getElementById("results-list").innerHTML = text;
}

goButton.addEventListener("click", function () {
  loadRecords();
});

document.getElementById("limit-5").addEventListener("click", function () {
  loadRecords(5);
});

document.getElementById("limit-10").addEventListener("click", function () {
  loadRecords(10);
});

document.getElementById("limit-20").addEventListener("click", function () {
  loadRecords(20);
});