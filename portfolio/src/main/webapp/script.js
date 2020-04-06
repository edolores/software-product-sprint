// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds one of my favorite songs to the page.
 */
function initMap() {
    createRoscoesMap();
    createOhMap();
    createGreenEggsMap();
    createBirrieriaMap();
    createNandosMap();
    createMisoyaMap();
}

function addRandomGreeting() {
  const greetings =
      ['Look - GOT7', 'Malibu - Jesse Baez', 'Phone Numbers - Dominic Fike', 
      'RNP - YBN Cordae, Anderson .Paak', 'Ambiente - AQUIHAYAQUIHAY', 'WHATS POPPIN - Jack Harlow'
      , 'Fangs - Matt Champion', 'Let Her Go - The Kid LAROI', 'Come Back to Earth -  Mac Miller', 'Cudi Zone - Kid Cudi'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function getHello() {
    fetch('/data')
    .then(response => response.json())
    .then((funFacts) => {
        const uname  = document.getElementById('username');
        uname.innerText = funFacts.username;

        const myStrings = document.getElementById('quote-container');
        myStrings.innerHTML = '';
        funFacts.comments.forEach((line) => {
            console.log(line);
            myStrings.appendChild(createListElement(line));
        });
    });
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

function createRoscoesMap(){
    var roscoes = {lat: 34.047520, lng: -118.346210};

    var map = new google.maps.Map(document.getElementById('map1'), {
    center: roscoes,
    zoom: 13,
    gestureHandling: 'greedy',
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }]
    });
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h11 id="firstHeading" class="firstHeading"><b>Roscoe\'s Chicken and Waffles</b></h11>'+
      '<div id="bodyContent">'+
      '<p>Roscoe\'s is a HUGE win for Los Angeles. The chicken and waffles are ' +
      'on another plane of existence. My first bite had me '+
      'in jaw-dropping shock. I first came here after a Lakers game '+
      'and the combination of winning the game and the food '+
      'created an amazing experience. If you\'re ever in Los '+
      'Angeles, you need to eat here. It\'s a must.</p>'+
      '<p>Last visited January 10, 2019.</p>'+
      '</div>'+
      '</div>';
    var infoWindow = new google.maps.InfoWindow({content: contentString});
    var marker = new google.maps.Marker({position: roscoes, map: map, title: 'Roscoe\'s Chicken and Waffles'});
    marker.addListener('mouseover', function(){
        infoWindow.open(map, marker);
    });
}

function createOhMap(){
    var ohdessert = {lat: 37.763560, lng: -122.479070};

    var map = new google.maps.Map(document.getElementById('map2'), {
    center: ohdessert,
    zoom: 13,
    gestureHandling: 'greedy',
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }]
    });
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h10 id="firstHeading" class="firstHeading"><b>OH Dessert Cafe</b></h10>'+
      '<div id="bodyContent">'+
      '<p>I have mixed emotions about this place. The dessert is AMAZING ' +
      'and they have really good boba. There\'s also a ton of '+
      'variety in the menu, which is a plus. '+
      'The atmosphere made me want to stay there '+
      'for hours with my friends. '+
      'The only downside is my car got broken into while '+
      'I was eating here :/.</p>'+
      '<p>Last visited August 16, 2019.</p>'+
      '</div>'+
      '</div>';
    var infoWindow = new google.maps.InfoWindow({content: contentString});
    var marker = new google.maps.Marker({position: ohdessert, map: map, title: 'OH Dessert Cafe'});
    marker.addListener('mouseover', function(){
        infoWindow.open(map, marker);
    });

}

function createGreenEggsMap(){
    var greenEggs = {lat: 39.948320, lng: -75.162320};

    var map = new google.maps.Map(document.getElementById('map3'), {
    center: greenEggs,
    zoom: 13,
    gestureHandling: 'greedy',
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }]
    });
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h9 id="firstHeading" class="firstHeading"><b>Green Eggs Cafe</b></h9>'+
      '<div id="bodyContent">'+
      '<p>This is one of the first restaurants I ever visited in Philly. ' +
      'The portions are fair and give HUGE portions. '+
      'They do not hold back when making their large and '+
      'gluttonous dishes. I loved visiting this place and '+
      'come back every couple of weeks for breakfast. '+
      'Their red velvet pancakes are a major recommendation from me.</p>'+
      '<p>Last visited September 25, 2019.</p>'+
      '</div>'+
      '</div>';
    var infoWindow = new google.maps.InfoWindow({content: contentString});
    var marker = new google.maps.Marker({position: greenEggs, map: map, title: 'Green Eggs Cafe'});
    marker.addListener('mouseover', function(){
        infoWindow.open(map, marker);
    });
}

function createBirrieriaMap(){
    var birrieria = {lat: 34.176430, lng: -118.381660};

    var map = new google.maps.Map(document.getElementById('map4'), {
    center: birrieria,
    zoom: 13,
    gestureHandling: 'greedy',
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }]
    });
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h8 id="firstHeading" class="firstHeading"><b>Birrieria San Marcos</b></h8>'+
      '<div id="bodyContent">'+
      '<p>I can\'t hype this place up enough. Let me just say that these ' +
      'tacos are JUICY. These types of tacos are fried until golden brown and '+
      'are eaten with a soup that\'s meant for dipping. My mouth is watering '+
      'as I write this. Los Angeles tacos remain undefeated.</p>'+
      '<p>Last visited January 7, 2020.</p>'+
      '</div>'+
      '</div>';
    var infoWindow = new google.maps.InfoWindow({content: contentString});
    var marker = new google.maps.Marker({position: birrieria, map: map, title: 'Birrieria San Marcos'});
    marker.addListener('mouseover', function(){
        infoWindow.open(map, marker);
    });
}

function createNandosMap(){
    var nandos = {lat: 38.906147, lng: -77.0419462};

    var map = new google.maps.Map(document.getElementById('map5'), {
    center: nandos,
    zoom: 13,
    gestureHandling: 'greedy',
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }]
    });
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h7 id="firstHeading" class="firstHeading"><b>Nando\'s Peri-Peri</b></h7>'+
      '<div id="bodyContent">'+
      '<p>Nando\'s is an Afro-Portuguese restaurant that has ' +
      'the absolute best chicken I\'ve had in my life. '+
      'I\'m not kidding when I say that this chicken is to die for.  '+
      'The sauces they use are unbelievable and I wanted more as soon as I left '+
      'the restaurant. I can\'t wait for the next time I can come back to D.C.</p>'+
      '<p>Last visited March 10, 2019.</p>'+
      '</div>'+
      '</div>';
    var infoWindow = new google.maps.InfoWindow({content: contentString});
    var marker = new google.maps.Marker({position: nandos, map: map, title: 'Nando\'s Peri-Peri'});
    marker.addListener('mouseover', function(){
        infoWindow.open(map, marker);
    });
}

function createMisoyaMap(){
    var misoya = {lat: 40.72845, lng: -73.987993};

    var map = new google.maps.Map(document.getElementById('map6'), {
    center: misoya,
    zoom: 13,
    gestureHandling: 'greedy',
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }]

    });
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h7 id="firstHeading" class="firstHeading"><b>Misoya</b></h7>'+
      '<div id="bodyContent">'+
      '<p>Misoya is the first ramen restaurant ' +
      'I\'ve ever visited. I came to New York on a vacation '+
      'trip with my friends and they\'d learned that I\'d never had ramen '+
      'before. So, naturally, we took an excursion from Central Park '+
      'to Misoya, a place my friend had been to before. '+
      'To this day, Misoya is one of my favorite ramen restaurants.</p>'+
      '<p>Last visited October 15, 2019.</p>'+
      '</div>'+
      '</div>';
    var infoWindow = new google.maps.InfoWindow({content: contentString});
    var marker = new google.maps.Marker({position: misoya, map: map, title: 'Misoya'});
    marker.addListener('mouseover', function(){
        infoWindow.open(map, marker);
    });
}
