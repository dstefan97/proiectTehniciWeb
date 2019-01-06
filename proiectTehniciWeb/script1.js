    var oras,companie,pozitie,vechime,salariu,descriere;
    const url='http://localhost:3001/info';
    function postRequest(url, data) {
      return fetch(url, {
        credentials: 'same-origin', 
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
      })
      .then(response => response.json())
    }
    document.getElementById("Adauga").addEventListener('click',function(){
    oras=document.getElementById('Oras').value;
    companie=document.getElementById('Companie').value;
    pozitie=document.getElementById('Pozitie').value;
    vechime=document.getElementById('Vechime').value;
    salariu=document.getElementById('Salariu').value;
    descriere=document.getElementById('Descriere').value;
    var data1={
      "oras": oras,
      "companie": companie,
      "pozitie": pozitie,
      "vechime": vechime,
      "salariu": salariu,
      "descriere": descriere
    }
    postRequest(url,data1)
    .then(data => console.log(data)) 
    .catch(error => console.error(error))
    document.getElementById("formadd").reset();
    })
  