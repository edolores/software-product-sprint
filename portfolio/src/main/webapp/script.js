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

function getHello() {
    fetch('/data')
    .then(response => response.json())
    .then((funFacts) => {
        if(funFacts.length != 3){
            throw "Too few fun facts";
        }
        const myStrings = document.getElementById('quote-container');
        myStrings.innerHTML = '';
        funFacts.forEach((line) => {
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
