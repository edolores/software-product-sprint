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

async function getHello() {
    // const response = await fetch('/data');
    // const quote = await response.text();
    // document.getElementById('quote-container').innerText = quote;
    fetch('/data')
    .then(response => response.json())
    .then((funFacts) => {
        const myStrings = document.getElementById('quote-container');
        myStrings.innerHTML = '';
        console.log(funFacts[0]);
        myStrings.appendChild(
            createListElement('Basketball: ' + funFacts[0]));
            console.log(funFacts[1]);
        myStrings.appendChild(
            createListElement('Color: ' + funFacts[1]));
        console.log(funFacts[2]);
        myStrings.appendChild(
            createListElement('Food: ' + funFacts[2]));
    });
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
