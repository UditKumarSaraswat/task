const parent = document.getElementById('parent');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New Paragraph (appendChild)';
const newText = 'Text appended with append';

// Using appendChild
parent.appendChild(newParagraph); // Adds the new paragraph as a child

// Using append
parent.append(newText); // Adds the text as a child

// Using append with multiple arguments
const anotherParagraph = document.createElement('p');
anotherParagraph.textContent = 'Another Paragraph (append)';
parent.append(anotherParagraph, "More text appended"); // Adds the paragraph and text

// Demonstrating the return value of appendChild
const appendedNode = parent.appendChild(document.createElement('div'));
console.log(appendedNode); // Output: <div></div>

// Demonstrating the lack of return value of append
const appendResult = parent.append("Test");
console.log(appendResult); // Output: undefined