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
    let td4 = document.createElement("td"), max=45;
    td1.innerText = municipalities[key];
    td2.innerText = populations[i]
    td3.innerText = emplValues[i]
    let percentage = parseInt(emplValues[i]) / parseInt(populations[i])*100;
    td4.innerText = percentage.toFixed(2) + "%";
    td1.style.backgroundColor = '#ffffff';
    td2.style.backgroundColor = '#ffffff';
    td3.style.backgroundColor = '#ffffff';
    td4.style.backgroundColor = '#ffffff';
    if (i%2==0){
      td1.style.backgroundColor = '#f2f2f2';
      td2.style.backgroundColor = '#f2f2f2';
      td3.style.backgroundColor = '#f2f2f2';
      td4.style.backgroundColor = '#f2f2f2';
    }
    if (percentage > 45){
      td1.style.backgroundColor = '#abffbd';
      td2.style.backgroundColor = '#abffbd';
      td3.style.backgroundColor = '#abffbd';
      td4.style.backgroundColor = '#abffbd';
    }
    else if (percentage < 25){
      td1.style.backgroundColor = '#ff9e9e';
      td2.style.backgroundColor = '#ff9e9e';
      td3.style.backgroundColor = '#ff9e9e';
      td4.style.backgroundColor = '#ff9e9e';
    }
    tr.appendChild(td1);   
    tr.appendChild(td2);   
    tr.appendChild(td3);   
    tr.appendChild(td4);   
    tableBody.appendChild(tr);
    i++;
  })
}