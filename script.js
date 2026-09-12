// Ez a funkció fut le, amikor rákattintasz egy kis kártyára
function kartyaNagyitas(kattintottKartya) {
    // 1. Megkeressük a rejtett ablak belső részét
    const modalBelso = document.getElementById('modal-belso');
    
    // 2. Bemásoljuk a kattintott kártya teljes tartalmát a nagy ablakba
    modalBelso.innerHTML = kattintottKartya.innerHTML;
    
    // 3. A nagy ablakban elrejtjük a kis "kukucskáló" képet
    modalBelso.querySelector('.kukucskalo').style.display = 'none';
    
    // 4. Láthatóvá tesszük a részletes leírást és a nagy képet
    modalBelso.querySelector('.rejtett-leiras').style.display = 'block';

    // 5. Kicsit felnagyítjuk a neveket a nagy ablakban, hogy jobban mutasson
    modalBelso.querySelector('.japan-nev').style.fontSize = '2em';
    modalBelso.querySelector('.magyar-nev').style.fontSize = '1.2em';
    
    // 6. Végül megjelenítjük magát a sötét hátterű felugró ablakot
    document.getElementById('nagyito-ablak').style.display = 'flex';
}

// Ez a funkció fut le, amikor az X-re vagy a fekete háttérre kattintasz
function ablakBezar() {
    // Egyszerűen újra elrejtjük az egészet
    document.getElementById('nagyito-ablak').style.display = 'none';
}


// Kereső funkció, ami minden betű leütésekor lefut
function keresesFuggveny() {
    // Mit írt be a felhasználó? (kisbetűssé alakítjuk, hogy ne számítson a kis/nagybetű)
    const szuro = document.getElementById('kereso').value.toLowerCase();
    
    // Megkeressük az összes kis kártyát a rácsban
    const kartyak = document.querySelectorAll('.kartya-racs .mini-kartya');

    // Végigmegyünk az összes kártyán egyenként
    for (let i = 0; i < kartyak.length; i++) {
        // Kinyerjük az aktuális kártya japán és magyar nevét
        const japanNev = kartyak[i].querySelector('.japan-nev').innerText.toLowerCase();
        const magyarNev = kartyak[i].querySelector('.magyar-nev').innerText.toLowerCase();

        // Ha a keresett betű(k) benne van a japán VAGY a magyar névben
        if (japanNev.includes(szuro) || magyarNev.includes(szuro)) {
            kartyak[i].style.display = ""; // Megmutatjuk a kártyát
        } else {
            kartyak[i].style.display = "none"; // Eltüntetjük a kártyát
        }
    }
}



function menuNyitas() {
    document.getElementById("oldal-menu").style.width = "260px";
}

function menuZaras() {
    document.getElementById("oldal-menu").style.width = "0";
}