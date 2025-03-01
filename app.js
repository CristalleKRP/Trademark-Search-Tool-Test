// Sample list of registered trademarks
const registeredTrademarks = ["Apple", "Google", "Microsoft", "Nike", "Tesla"];

// Function to check trademark availability
function checkTrademark() {
    const trademarkName = document.getElementById('trademarkName').value.trim();
    const resultDiv = document.getElementById('result');

    if (trademarkName === "") {
        resultDiv.innerHTML = "Please enter a trademark name!";
        resultDiv.style.color = "red";
        return;
    }

    if (registeredTrademarks.includes(trademarkName)) {
        resultDiv.innerHTML = `"${trademarkName}" is already taken!`;
        resultDiv.style.color = "red";
    } else {
        resultDiv.innerHTML = `"${trademarkName}" is available!`;
        resultDiv.style.color = "green";
    }
}

// Add event listener to search button
document.getElementById('searchButton').addEventListener('click', checkTrademark);
