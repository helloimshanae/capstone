let searchBox = document.getElementById("character-search");
let goButton = document.getElementById("search-button");

async function loadRecords() {
  let response = await fetch("https://student-data-api.sahadeo-shanae.workers.dev/api/v1/datasets/DC-Comics-Characters/records?search=" + searchBox.value);
  console.log("Status: " + response.status);

  let data = await response.json();
  let records = data.records;
  console.log("Records: " + records.length);
}

goButton.addEventListener("click", function () {
  loadRecords();
});