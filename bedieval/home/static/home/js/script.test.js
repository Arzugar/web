// BEGIN: Test
var header = document.createElement('div');
header.classList.add('pinning_header_container');

// Vérifie si la classe 'pinning_header_container' est bien ajoutée à l'élément
console.assert(header.classList.contains('pinning_header_container'), "La classe 'pinning_header_container' n'a pas été ajoutée à l'élément.");

// Vérifie si l'élément est bien sélectionné
console.assert(header === document.querySelector('.pinning_header_container'), "L'élément n'a pas été correctement sélectionné.");

// END: Test