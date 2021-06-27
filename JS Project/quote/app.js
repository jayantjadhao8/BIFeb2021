var quotes = [
    "Hardwork, WillPower & Dedication For a Person with these Qualities, the Sky is the Limit - Milkha Singh",
    "All our dreams can come true, if we have the courage to pursue them. – Walt Disney",
    "It’s hard to beat a person who never gives up. – Babe Ruth",
    "If people are doubting how far you can go, go so far that you can’t hear them anymore. – Michele Ruiz",
    "Whatever you are, be a good one. ― Abraham Lincoln"
]

function getQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length)
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}