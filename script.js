let searchBox = document.getElementById("character-search");
let goButton = document.getElementById("search-button");

async function loadRecords() {
  let response = await fetch("https://student-data-api.sahadeo-shanae.workers.dev/api/v1/datasets/DC-Comics-Characters/records?search=" + searchBox.value);
  console.log("Status: " + response.status);

  let data = await response.json();
  let records = data.records;
  console.log("Records: " + records.length);
  
  let record = records[0];

  document.getElementById("results-list").textContent = "CHARACTER NAME: " + record.Name;
  document.getElementById("results-detail").textContent = "APPEARANCES: " + record["APPEARANCES"];
}

goButton.addEventListener("click", function () {
  loadRecords();
});