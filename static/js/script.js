// Global Variable
let apiQuotes = []; // empty array allows for json data to load into space.

// Show New Quote
function newQuote() {
    // Select a random quote from apiQuotes array
    // Math.floor will return rounded whole number
    // Math.random will select single random quote from array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    
    // try to collect API data. If not working, then catch error to solve & fix  
    
    try {
      const response = await fetch(apiUrl); 
      // response const created when we have API data, else error message
      apiQuotes = await response.json();
      // console.log(apiQuotes); used to view appearance of API data in console
      newQuote();
    } catch (error) {
        alert('Unable to load data...');
        // Catch error here
    }
}

// Upon succcessful load of API data
getQuotes();