const nombreNoticia = localStorage.getItem('newsref');

let news = ["Pele", "Silvestre", "EuroBasket", "RogerFederer"];

let titleNews = ["FALLECE EL TRES VECES GANADOR DEL MUNDO, PELÉ, A LOS 82 AÑOS","VEN A CORRER LA SAN SILVESTRE VALLECANA ", "ESPAÑA GANA EL EUROBASKET POR CUARTA VEZ EN TODA SU HISTORIA", "ROGER FEDERER SE RETIRA DEL TENIS"];

let newsSummary = ["<p id='newsSum'><b>El futbolista ha fallecido como consecuencia de un cáncer de colon en el hospital Albert Einstein de São Paulo, donde llevaba un mes ingresado.</b> <br><br> Pelé, el único futbolista que conquistó tres Mundiales, el primero de fama planetaria, ha fallecido este jueves con 82 años como consecuencia de un cáncer de colon en el hospital Albert Einstein de São Paulo, según ha confirmado su hija Kely Nascimento. <br><br> “Todo lo que somos es gracias a ti, te amamos infinitamente. Descanse en paz”, ha escrito en su cuenta de Instagram. Con él, acaba una era en la historia del fútbol y en Brasil. </p>",
                   "<p id='newsSum'>Como todos los finales de año, miles de personas se han reunido en Vallecas para correr la icónica ruta del barrio madrileño. <br> Una de las tradiciones que muchos madrileños comparten es la de correr todos los 31 de diciembre la San Silvestre Vallecana. Con un recorrido de 10 kilómetros y miles de participantes, esta mítica ruta ha cumplido en 2022 nada más y nada menos que 58 ediciones. <br><br> <b>40.000 participantes vuelven a llenar de running las calles de Madrid en el último día del año</b>.</p>", 
                   "<p id='newsSum'>La selección española de baloncesto agrandó su leyenda al derrotar a Francia en la final del Eurobasket 2022 para colgarse un oro completamente inesperado y que se convierte en el cuarto oro de la historia de España en un campeonato de Europa, todos ellos bajo el mando de Sergio Scariolo, y la medalla número 20 en el palmarés español, que ahora aúna los títulos de campeón de Europa y del mundo. <br><br> La nueva generación de España dio su gran campanada y fue apoyada durante todo el torneo por el veterano Rudy Fernández, quien con sus triples le dio vida a esta selección en los momentos complicados del certamen</p>", 
                   "<p id='newsSum'>Roger Federer ha anunciado su retirada del tenis. Una leyenda como pocas ha existido en el deporte de la raqueta. A los 41 años y tras unas temporadas muy difíciles por las lesiones, el suizo ha decidido colgar las zapatillas.<br><br> Federer deja un legado único en la historia del tenis. El primer tenista masculino en alcanzar los 20 títulos de Grand Slam, además de hacerlo con un estilo muy característico y elogiado por millones de personas. <br><br><b>Su técnica y elegancia sobre el verde jamás serán olvidadas.</b></p>"];

let src = ["https://imagenes.elpais.com/resizer/ivXE4WDehPHV0gXkuGcBhGZwr88=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XWYNF4ONCJFIDF4G4DW5QL6TTM.jpg",
            "https://thelastlap.run/wp-content/uploads/2022/12/San-Silvestre_1-1210x700.webp", 
            "https://estaticosgn-cdn.deia.eus/clip/3b45b39f-2308-4a00-a1d3-7f6de0c6b76a_16-9-discover-aspect-ratio_default_0_x2482y1945.jpg",
           "https://d2me2qg8dfiw8u.cloudfront.net/content/uploads/2022/09/21065559/Roger-Federer-applauding.jpg"];

let descriptionNews = ["<p id='newsDes'>Pelé, el único futbolista que conquistó tres Mundiales, el primero de fama planetaria, ha fallecido este jueves con 82 años como consecuencia de un cáncer de colon en el hospital Albert Einstein de São Paulo, según ha confirmado su hija Kely Nascimento. “Todo lo que somos es gracias a ti, te amamos infinitamente. Descanse en paz”, ha escrito en su cuenta de Instagram. Con él, acaba una era en la historia del fútbol y en Brasil. Los que tuvieron el privilegio de verle jugar en directo o lo han visto en vídeo recuerdan con precisión aquel gol de cabeza con el que abrió el marcador en su tercer Mundial. La final del 4-1 contra Italia en México 70. Un instante que, junto a jugadas y goles legendarios, ha cristalizado en la memoria colectiva como la expresión máxima del fútbol bello, eficaz e irreverente. “Encantado, soy Ronald Reagan, presidente de los Estados Unidos. Usted no necesita presentarse porque todo el mundo sabe quién es Pelé”, le dijo su anfitrión en una de sus primeras visitas a la Casa Blanca. <br><br> Edson Arantes do Nascimento nació el 23 de octubre de 1940 en Tres Corações, un pueblito de Minas Gerais. Hijo del futbolista profesional João Ramos, Dondinho, y del ama de casa Celeste, lo bautizaron Edson en honor al padre de la bombilla. Gracias a su don para el fútbol, a los diez años ya era una celebridad local. Con 15 años, su primer viaje a la ciudad costera de Santos marcó dos hitos en su vida: cumplió su sueño de ver el mar y fichó por el club al que siempre fue fiel, el Santos. Arrancaba una carrera fulgurante que le llevó a ser consagrado como uno de los mejores deportistas del siglo XX.</p>", 
                    "<p id='newsDes'>La carrera cuenta con dos modalidades: una para los atletas de élite y otra para quienes deseen participar sin marca profesional. Los dorsales se agotaron rápidamente, aunque también se pudo participar sin inscripción. Eso sí, sin que la organización contabilizase los tiempos de quienes lo hicieron. <br><br> Cheptegei, de 26 años, llegó a Madrid tras superar una lesión que le impidió competir mucho este año pero no renunció a intentar batir el récord de la prueba, en poder de su compatriota Jacob Kiplimo, que en 2018, con un tiempo de 26:41, batió la anterior plusmarca (26:54), que estaba en poder de Eliud Kipchoge desde 2006. <br><br> El atleta ugandés, doble campeón del mundo de 10.000 metros y oro olímpico en Tokio en 5.000, también tenía el objetivo en Vallecas de lograr la mejor marca de siempre en 10k, actualmente en poder del keniano Rhonex Kipruto, cuando corrió en 26:24 en Valencia en 2020. Se esperaba un mano a mano entre Mohamed Katir y Joshua Cheptegei y la San Silvestre Vallecana no defraudó en absoluto. Los dos favoritos se batieron en un precioso duelo por la victoria y dejaron una batalla muy dura que comenzó a decidirse a falta de unos 2 kilómetros para la llegada en el Estadio de Vallecas. <br><br> En la categoría femenina, el triunfo fue a parar a manos de <b>Prisca Chesang</b>, que completó la fiesta de Uganda en Vallecas. La fondista también deslumbró y voló sobre las calles de Madrid porque llegó a firmar otra de las mejores marcas de toda la Historia de la prueba en féminas. La carrera no tardó en romperse, algo lógico teniendo en cuenta el nivel de los grandes favoritos a la victoria. En la previa, Katir había dicho que Cheptegei era un 'bicho', y desde luego que sus palabras no eran ni mucho menos fruto del azar. Con apenas 3 kilómetros disputados, estas dos cabezas visibles se quedaron en un pequeño grupo de cuatro atletas entre los que estaba también Jesús Ramos. El atleta español demostró tener unas buenas piernas y, a un ritmo infernal, consiguió aguantar a Katir y a Cheptegei casi hasta el ecuador de la carrera. El paso por el kilómetro 3 dejó un crono de 7:59, así que se iba volando en busca de la línea de llegada en el Estadio de Vallecas, donde ya aguardaba el público impaciente esperando a levantarse de sus asientos. </p>",
                    "<p id='newsDes'>España gana el Eurobasket por cuarta vez en toda su historia. <br> Se trata del decimocuarto metal para la selección en un Europeo, y el cuarto oro del combinado nacional, que ya lo había conseguido en el 2009, 2011 y 2015 y que parecía muy lejano cuando empezó el campeonato. Se consigue así mejorar lo conseguido en 2017, cuando España logró el bronce, un metal que ya había conseguido 1991, 2001 y 2013.    Además, España cuenta en su haber con seis medallas de plata, que consiguió en 1935, 1973, 1983, 1999, 2003 y 2007. La última de ellas había sido en el Eurobasket celebrado en España, donde el combinado nacional cayó en la final contra Rusia. <br> El combinado nacional ha conseguido así aglutinar el título de campeón del Europa y del mundo, algo que había conseguido en el año 2009. Tras ganar el Mundial 2006 en Japón, España cayó en la final del Eurobasket 2007 y se quedó a las puertas de lograrlo, pero aprovechó su segunda oportunidad en Polonia y disfrutó de ese honor durante algo menos de un año. <br> A estos logros en Europa, España suma haber ganado dos veces el Mundial, del que es vigente campeona tras reinar en China 2019 y que también había ganado en 2006 en Japón. Además, en Juegos Olímpicos, han sido cuatro las medallas de España, tres de ellas de plata: Los Ángeles 1984, Pekín 2008 y Londres 2012; y una de bronce en Río 2016.</p>",
                    "<p id='newsDes'>El tenista suizo ha utilizado sus redes sociales para emitir el mensaje de despedida. El motivo es claro: después de meses buscando la recuperación óptima de su cuerpo, Federer considera que ha llegado al límite de su cuerpo. 'Como sabéis muchos de vosotros, en los últimos tres años se me han presentado muchos retos por lesiones y cirugías', cuenta en su carta. <br><br>El último partido oficial de Federer fue el 7 de julio de 2021 en los cuartos de final de Wimbledon. El suizo venía arrastrando problemas graves desde 2020 y, aunque no lo sabíamos, esa sería su participación definitiva antes de la Laver Cup de 2022. Roger Federer tiene 41 años y lleva varias temporadas con problemas de lesiones. El tenista no ha podido estar sobre las pistas como él hubiese querido. Ya no solo en cuanto a calidad de su presencia, sino en cantidad de partidos. Para recordar el último Grand Slam de Roger Federer hay que remontarse varios años, cuando ganó el Open de Australia el 28 de enero de 2018. Ese triunfo le permitió ser el primer tenista con 20 títulos de Grand Slam.</p>"];

                

let cont = 0;
for(let i = 0; i< news.length; i++){
    if(news[i] == nombreNoticia){
        cont = i;
    }
}

document.getElementById('titleNews').innerHTML = titleNews[cont];
document.getElementById("newsSum").innerHTML = newsSummary[cont];
document.getElementById("imgNews").src = src[cont];
document.getElementById("newsDes").innerHTML = descriptionNews[cont];