// Array of greeting phrases
const greetings = ["Hello", "Hi", "Greetings", "Hey"];

// Array of adjectives to describe the user
const adjectives = ["amazing", "incredible", "fantastic", "wonderful"];

// Array of motivational messages
const messages = [
  "today is a perfect day to pursue your dreams.",
  "the universe is aligning in your favor.",
  "opportunities are just around the corner.",
  "you have the power to change your life.",
];

// Function to select a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Generate a complete message by combining random pieces
function generateMessage() {
  const greeting = getRandomElement(greetings);
  const adjective = getRandomElement(adjectives);
  const message = getRandomElement(messages);

  return `${greeting}! You are ${adjective}, and ${message}`;
}

// Output the generated message
console.log(generateMessage());
