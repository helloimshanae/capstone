let searchBox = document.getElementById("character-search");
let goButton = document.getElementById("search-button");

async function loadRecords() {
  let response = await fetch("https://student-data-api.sahadeo-shanae.workers.dev/api/v1/datasets/DC-Comics-Characters/records?search=" + searchBox.value);
  console.log("Status: " + response.status);

  let data = await response.json();
  let records = data.records;
  console.log("Records: " + records.length);

document.getElementById("result-1").innerHTML = "NAME: " + records[0].Name + "<br>APPEARANCES: " + records[0]["APPEARANCES"];
document.getElementById("result-2").innerHTML = "NAME: " + records[1].Name + "<br>APPEARANCES: " + records[1]["APPEARANCES"];
document.getElementById("result-3").innerHTML = "NAME: " + records[2].Name + "<br>APPEARANCES: " + records[2]["APPEARANCES"];
}

goButton.addEventListener("click", function () {
  loadRecords();
});