document.addEventListener("DOMContentLoaded", function() {

  let poetas = [
  {
    nombre: 'Jorge Luis Borges',
    biografia: 'Jorge Francisco Isidoro Luis Borges Acevedo (Buenos Aires, 24 de agosto de 1899-Ginebra, 14 de junio de 1986) fue un escritor, poeta, crítico literario, traductor y filósofo argentino, considerado una de las figuras más importantes de la literatura del siglo XX. Su obra, que se caracteriza por la exploración de temas filosóficos como la realidad, la identidad, la memoria, el tiempo y el lenguaje, ha sido influyente en la literatura y el pensamiento del siglo XX y XXI.'
  },
  {
    nombre: 'Pablo Neruda',
    biografia: 'Pablo Neruda (Parral, Chile, 12 de julio de 1904-Santiago de Chile, 23 de septiembre de 1973) fue un poeta chileno, cuyo verdadero nombre era Ricardo Eliécer Neftalí Reyes Basoalto. Fue uno de los poetas más destacados del siglo XX y uno de los más importantes de la literatura universal. En 1971 recibió el Premio Nobel de Literatura.'
  },
  {
    nombre: 'Octavio Paz',
    biografia: 'Octavio Paz Lozano (Ciudad de México, 31 de marzo de 1914-ibídem, 19 de abril de 1998) fue un poeta, ensayista, diplomático y político mexicano. Fue galardonado con el Premio Nobel de Literatura en 1990.'
  },
  {
    nombre: 'Gabriela Mistral',
    biografia: 'Lucila Godoy Alcayaga (Vicuña, Chile, 7 de abril de 1889-Hempstead, Nueva York, 10 de enero de 1957), más conocida por su seudónimo Gabriela Mistral, fue una poeta, educadora, diplomática y activista chilena. Fue la primera mujer latinoamericana en recibir el Premio Nobel de Literatura en 1945.'
  },
  {
    nombre: 'José Martí',
    biografia: 'José Julián Martí Pérez (La Habana, 28 de enero de 1853-Dos Ríos, 19 de mayo de 1895) fue un poeta, ensayista, periodista, filósofo, traductor, profesor, orador, político, diplomático y militante independentista cubano. Es considerado el héroe nacional de Cuba y uno de los principales ideólogos del pensamiento latinoamericano.'
  },
  {
    nombre: 'Juan Ramón Jiménez',
    biografia: 'Juan Ramón Jiménez Mantecón (Moguer, Huelva, 23 de diciembre de 1881-San Juan, Puerto Rico, 29 de mayo de 1958) fue un poeta español, Premio Nobel de Literatura en 1956.'
  },
  {
    nombre: 'Julio Cortázar',
    biografia: 'Julio Florencio Cortázar Descotte (Bruselas, Bélgica, 26 de agosto de 1914-París, Francia, 12 de febrero de 1984) fue un escritor, traductor y crítico literario argentino. Es considerado uno de los más importantes escritores del siglo XX.'
  },
  {
    nombre: 'José Emilio Pacheco',
    biografia: 'José Emilio Pacheco Bello (Ciudad de México, 30 de junio de 1939-ibídem, 30 de enero de 2014) fue un poeta, ensayista, traductor y crítico literario mexicano. Fue uno de los'
},
];

var poetasDiv = document.createElement('div');
poetasDiv.innerHTML = '<h1>Poetas Latinoamericanos</h1>';

for (var i = 0; i < poetas.length; i++) {
  var poeta = poetas[i];
  var poetaDiv = document.createElement('div');
  poetaDiv.innerHTML = '<h2>' + poeta.nombre + '</h2>' + '<p>' + poeta.biografia + '</p>';
  poetasDiv.appendChild(poetaDiv);
}

document.body.appendChild(poetasDiv);
});
