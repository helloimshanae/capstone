let searchBox = document.getElementById("character-search");
let goButton = document.getElementById("search-button");

async function loadRecords() {
  let response = await fetch("https://student-data-api.sahadeo-shanae.workers.dev/api/v1/datasets/DC-Comics-Characters/records?search=" + searchBox.value);
  console.log("Status: " + response.status);

  let data = await response.json();
  let records = data.records;
  console.log("Records: " + records.length);

  let text = "";

  records.forEach(function (record) {
    text = text + "<b>NAME:</b> " + record.Name + "<br><b>APPEARANCES:</b> " + record["APPEARANCES"] + "<br><b>FIRST APPEARANCE:</b> " + record["FIRST APPEARANCE"] + "<br><br>";
  });

  document.getElementById("results-list").innerHTML = text;
}

goButton.addEventListener("click", function () {
  loadRecords();
});