var quotes = [
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      quote: "So many books, so little time.",
      author: "Frank Zappa"
    },
    {
      quote: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero"
    },
    {
      quote: "Eighty percent of success is showing up.",
      author: "Woody Allen"
    },
    {
      quote: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs"
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    }
  ];
  
  function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex].quote;
    document.getElementById('author').textContent = `– ${quotes[randomIndex].author}`;
  }
  