// constant variables - unable to be re-assigned 
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Global Variable
// let apiQuotes = []; // empty array allows for json data to load into space.

function showLoadingSpinner() {
    loader.hidden = false; // false indicates we want loader on show.
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true; // true indicates we want loader to be hidden.
}

// Show New Quote
function newQuote() {
    loading();
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
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set the Quote, hide the loader
    quoteText.textContent = quote.text;
    complete();
}

// // Get Quotes from API
// async function getQuotes() {
       loading();    
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


// Tweet Quote
function tweetQuote() {
    // backticks used for twitter url address
    // template variable added to url address to help pass the quoteText string 
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank'); // opens twitter in a brand new browser tab 
}

// Event Listeners enabling button functionality
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// Upon succcessful load of API data
// getQuotes();
   newQuote();