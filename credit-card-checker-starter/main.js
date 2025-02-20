// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// 1. validateCred()
// This function uses the Luhn algorithm to determine if a credit card number is valid.
// It does not modify the original array.
function validateCred(card) {
  // Make a copy and reverse it so that the check digit is at index 0.
  const reversed = card.slice().reverse();
  let sum = 0;

  // Process each digit
  for (let i = 0; i < reversed.length; i++) {
    let currentDigit = reversed[i];

    // Double every other digit (i.e. digits at odd indices in the reversed array)
    if (i % 2 === 1) {
      currentDigit *= 2;
      // If the result is greater than 9, subtract 9 from it.
      if (currentDigit > 9) {
        currentDigit -= 9;
      }
    }
    // Add to the total sum
    sum += currentDigit;
  }

  // If the total modulo 10 is 0, the card is valid.
  return sum % 10 === 0;
}

// 2. findInvalidCards()
// This function takes a nested array of credit card numbers and returns another nested array
// containing only those cards that are invalid.
function findInvalidCards(cards) {
  return cards.filter((card) => !validateCred(card));
}

// 3. idInvalidCardCompanies()
// This function identifies which credit card companies have issued faulty numbers.
// It checks the first digit of each card and returns an array of company names without duplicates.
// If a card's first digit does not match any of the known companies, it prints a message.
function idInvalidCardCompanies(invalidCards) {
  const companies = [];

  invalidCards.forEach((card) => {
    // The first digit determines the company.
    switch (card[0]) {
      case 3:
        if (!companies.includes("Amex")) companies.push("Amex");
        break;
      case 4:
        if (!companies.includes("Visa")) companies.push("Visa");
        break;
      case 5:
        if (!companies.includes("Mastercard")) companies.push("Mastercard");
        break;
      case 6:
        if (!companies.includes("Discover")) companies.push("Discover");
        break;
      default:
        console.log("Company not found for card starting with: " + card[0]);
    }
  });

  return companies;
}

// Example usage:
const invalidCards = findInvalidCards(batch);
console.log("Invalid Cards:", invalidCards);

const companiesWithInvalidCards = idInvalidCardCompanies(invalidCards);
console.log(
  "Companies that have issued invalid cards:",
  companiesWithInvalidCards
);
