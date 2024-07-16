async function fetchQuote() {
  try {
    const response = await fetch("http://localhost:3000/quote");
    const data = await response.json();
    document.getElementById("quote").innerText = `"${data.quote}"`;
    document.getElementById("author").innerText = `- ${data.author}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    document.getElementById("quote").innerText =
      "Failed to load quote. Please try again.";
    document.getElementById("author").innerText = "";
  }
}

document.getElementById("new-quote").addEventListener("click", fetchQuote);

// Fetch a quote when the popup is opened
document.addEventListener("DOMContentLoaded", fetchQuote);
