// constant variables - unable to be re-assigned 
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Global Variable
// let apiQuotes = []; // empty array allows for json data to load into space.

// Show New Quote
function newQuote() {
    // Select a random quote from apiQuotes array
    // Math.floor will return rounded whole number
    // Math.random will select single random quote from array
    // Can replace apiQuotes with localQuotes, in case of external data fail
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    
    // Check if Author field is blank/null and replace with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    
    // Check Quote length to determine styling
    if (quote.text,length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// // Get Quotes from API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
    
//     // try to collect API data. If not working, then catch error to solve & fix  
    
//     try {
//       const response = await fetch(apiUrl); 
//       // response const created when we have API data, else error message
//       apiQuotes = await response.json();
//       // console.log(apiQuotes); used to view appearance of API data in console
//       newQuote();
//     } catch (error) {
//         alert('Unable to load data...');
//         // Catch error here
//     }
// }

// Upon succcessful load of API data
// getQuotes();
   newQuote();