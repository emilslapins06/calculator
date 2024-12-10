function addToDisplay(value) 
{
    document.getElementById('display').value += value;
}

function clearDisplay() 
{
    document.getElementById('display').value = '';
}

function calculate() 
{
    try 
    {
        const display = document.getElementById('display');
        const result = eval(display.value);
        display.value = result;
        addToHistory(display.value);
    } 
    catch (error) 
    {
        document.getElementById('display').value = 'Error';
    }
}

function addToHistory(entry) 
{
    const historyList = document.getElementById('history');
    const listItem = document.createElement('li');
    listItem.textContent = entry;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'clear';
    removeButton.addEventListener('click', () => {historyList.removeChild(listItem)});
    listItem.appendChild(removeButton);
    historyList.appendChild(listItem);
}

function clearHistory() 
{
    const historyList = document.getElementById('history');
    historyList.innerHTML = '';
}

