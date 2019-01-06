const url="http://localhost:3001/info/";
var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
function tablefill(url){
fetch(url)
.then(response => response.json())
.then(data => {
  for(i=0;i<data.length;i++){
    var newRow   = tableRef.insertRow(tableRef.rows.length);
        var newCell0  = newRow.insertCell(0);
        var newText0  = document.createTextNode(data[i].oras);
        newCell0.appendChild(newText0);
        var newCell1  = newRow.insertCell(1);
        var newText1  = document.createTextNode(data[i].companie);
        newCell1.appendChild(newText1);
        var newCell2  = newRow.insertCell(2);
        var newText2  = document.createTextNode(data[i].pozitie);
        newCell2.appendChild(newText2);
        var newCell3  = newRow.insertCell(3);
        var newText3  = document.createTextNode(data[i].vechime);
        newCell3.appendChild(newText3);
        var newCell4  = newRow.insertCell(4);
        var newText4  = document.createTextNode(data[i].salariu);
        newCell4.appendChild(newText4);
        var newCell5  = newRow.insertCell(5);
        var newText5  = document.createTextNode(data[i].descriere);
        newCell5.appendChild(newText5);
  }
})
.catch(error => console.error(error))
}
tablefill(url);
document.getElementById("Cauta").addEventListener('click',function(){
  tableRef.innerHTML ="";
  var urlfill=url+"?";
  if(document.getElementById('Oras').value.length>0){
    urlfill=urlfill+"&oras="+document.getElementById('Oras').value;
  }
  if(document.getElementById('Companie').value.length>0){
    urlfill=urlfill+"&companie="+document.getElementById('Companie').value;
  }
  if(document.getElementById('Pozitie').value.length>0){
    urlfill=urlfill+"&pozitie="+document.getElementById('Pozitie').value;
  }
  if(document.getElementById('Descriere').value.length>0){
    urlfill=urlfill+"&descriere="+document.getElementById('Descriere').value;
  }
  tablefill(urlfill);
})
