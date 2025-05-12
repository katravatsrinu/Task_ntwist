document.addEventListener('DOMContentLoaded', function() {
    const sortButton = document.getElementById('sort-button');
    const resetButton = document.getElementById('reset-button');
    const nameList = document.getElementById('name-list');
    const sortMessage = document.getElementById('sort-message');
    
    // Store the original order of names
    const originalNames = [];
    const listItems = nameList.querySelectorAll('li');
    
    // Save original order
    listItems.forEach(function(item) {
        originalNames.push(item.textContent);
    });
    
    // Sort the list when button is clicked
    sortButton.addEventListener('click', function() {
        const names = [];
        const listItems = nameList.querySelectorAll('li');
        
        // Get current names
        listItems.forEach(function(item) {
            names.push(item.textContent);
        });
        
        // Sort alphabetically
        names.sort();
        
        // Apply animation class
        nameList.classList.add('sorting');
        
        // Update the list with sorted names
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].textContent = names[i];
        }
        
        // Update message
        sortMessage.textContent = 'List is sorted alphabetically';
        
        // Remove animation class after animation completes
        setTimeout(function() {
            nameList.classList.remove('sorting');
        }, 500);
    });
    
    // Reset the list to original order
    resetButton.addEventListener('click', function() {
        const listItems = nameList.querySelectorAll('li');
        
        // Apply animation class
        nameList.classList.add('sorting');
        
        // Restore original order
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].textContent = originalNames[i];
        }
        
        // Update message
        sortMessage.textContent = 'List is in original order';
        
        // Remove animation class after animation completes
        setTimeout(function() {
            nameList.classList.remove('sorting');
        }, 500);
    });
});