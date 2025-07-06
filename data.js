const nama= "Rafli Prisandi";
let usia = 1;

let biodata= document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let generasi;
    if (usia >= 10 && usia <= 18){
    generasi = 'Generasi Tua';
    }
    else if (usia >= 2 && usia <10){
    generasi = 'Generasi Balita';
    }
    else if (usia <2){
    generasi = ' Generasi Bayi';
    }
    else if (usia >18 && usia <=35){
    generasi = 'Generasi Dewasa';
    }
    else{
        generasi = 'Generasi TUA!'
    }
    
    return biodata.innerHTML = generasi;
}