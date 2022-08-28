const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteButt = document.querySelector("button"),
soundButton = document.querySelector(".sound"),
copyButton = document.querySelector(".copy"),
twitterButton = document.querySelector(".twitter");

//random quote function
function randomQuote()
{
    quoteButt.classList.add("loading");
    quoteButt.innerText = "Loading Quote...";

    //fecthing the quite from a gitbug online 
    //https://github.com/lukePeavey/quotable

    //fecthing random quotes/data from the API and parsing it into JavaAScript object
    fetch("https://api.quotable.io/random").then(res => res.json()).
    then(result =>{

        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteButt.innerText = "New Quote";

        quoteButt.classList.remove("loading");
    });
}

soundButton.addEventListener("click",()=>{
    // the speechSynthesisUtterance is a web speech api that represents
    // speech request

    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} By ${authorName.innerText}`);
    speechSynthesis.speak(utterance);// speak method of speechSynthesis speaks the utterance

});

copyButton.addEventListener("click",()=>{
    // copying the quote text on button click
    // writeText() property writes the specified text string to the
    // system clipboard
    navigator.clipboard.writeText(`${quoteText.innerText} by ${authorName.innerText}`);

});

twitterButton.addEventListener("click",()=>{
   
    let Mess = `${quoteText.innerText} By ${authorName.innerText}`;
    let tweetUrl =`https://twitter.com/intent/tweet?url=${Mess}`;
    window.open(tweetUrl, "_blank"); //opening a new twitter tab passing the quote
});
quoteButt.addEventListener("click",randomQuote);


