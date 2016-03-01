var newTitle = alert('Let’s make a story together!');

var newColour = prompt('A colour (orange, indigo, etc.)');

var newCreature = prompt('A creature (dragon, moth, etc.)');

var newAdjective = prompt('An adjective (beautiful, super, etc.)');

var newVerb = prompt('A past tense verb (ran, burped, etc.)');

var newStory = prompt('Which story would you like? \n a) Snacking \n b) Escaping \n c) Winning');

switch (newStory) {
  case 'a':
    document.write('After snacking on ' + newAdjective + ' treats, the ' + newColour + ' bellied ' + newCreature + ' ' + newVerb + ' for hours.');
    break;

  case 'b':
    document.write('Ameilia' + newVerb + ' through the' + newAdjective + newColour + ' nebula escaping the space' + newCreature);
    break;

  case 'c':
    document.write('Jackson chose his ' + newAdjective + ',' + newColour + ' ' + newCreature + ' card and ' + newVerb + '  it to the table knowing he won.');
    break;
}
