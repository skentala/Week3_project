import "./styles.css";

populateTable();

async function populateTable(){
  const tableBody = document.getElementById("table-body");
  const url1 = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const url2 = "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const dataFetched1 = await fetch(url1);
  const dataJson1 = await dataFetched1.json();
  const dataFetched2 = await fetch(url2);
  const dataJson2 = await dataFetched2.json();
  let municipalities = dataJson1.dataset.dimension.Alue.category.label;
  let populations = dataJson1.dataset.value;
  let emplValues = dataJson2.dataset.value;
  let keys = Object.keys(municipalities);
  let i = 0;
  keys.forEach((key) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.innerText = municipalities[key];
    td2.innerText = populations[i]
    td3.innerText = emplValues[i++]
    tr.appendChild(td1);   
    tr.appendChild(td2);   
    tr.appendChild(td3);   
    tableBody.appendChild(tr);
  })
}