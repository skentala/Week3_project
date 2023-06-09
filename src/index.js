import "./styles.css";

populateTable();

async function populateTable(){
  const tableBody = document.getElementById("table-body");
  const url = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const dataFetched = await fetch(url);
  const dataJson = await dataFetched.json();
  let municipalities = dataJson.dataset.dimension.Alue.category.label;
  let populations = dataJson.dataset.value;
  let keys = Object.keys(municipalities);
  let i = 0;
  keys.forEach((key) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerText = municipalities[key];
    console.log(municipalities[key]);
    td2.innerText = populations[i++]
    tr.appendChild(td1);   
    tr.appendChild(td2);   
    tableBody.appendChild(tr);
  })
}