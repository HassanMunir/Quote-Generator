let apiQuotes = [];

// Show New Quote
function newQuote (){
  // Pick a New Quote from apiQuotes Array
  const quote = apiQuotes [Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Quotes From API
async function getQuotes() {
  const apiURL = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    // console.log(apiQuotes);   - Replace with newQuote()
    newQuote();

  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getQuotes();
