document.addEventListener('DOMContentLoaded', function() {
    var flipCount = 1;

    // Get reference to the close icon
    var closeIcon = document.getElementById('cta-close');

    // Add click event listener to the close icon
    closeIcon.addEventListener('click', function() {
        // Close the popup
        window.close();
    });

    // Variable to store the original content of .popupBody
    var originalContent = `
        <h2 class="title">See Each Prof's Grade Distribution</h2>
        <p class="content">Because sometimes you only care about getting that A</p>
    `;

    function loadMoreInfo() {
        fetch('moreInfo.html')
            .then(response => response.text())
            .then(data => {
                // Inject the fetched HTML content into the popup body
                document.querySelector('.popupBody').innerHTML = data;

                // Change the text of the moreInfoButton to "Go Back"
                document.getElementById('moreInfoButton').innerText = "Go Back";
                
            })
            .catch(error => {
                console.error('Error loading more info:', error);
            });
    }

    // Function to handle "Go Back" button click
    function goBack() {
        fetch('popup.html')
            .then(response => response.text())
            .then(data => {
                // Inject the fetched HTML content into the popup body
                document.querySelector('.popupBody').innerHTML = originalContent;

                // Change the text of the moreInfoButton to "Go Back"
                document.getElementById('moreInfoButton').innerText = "More Info";
                
            })
            .catch(error => {
                console.error('Error loading more info:', error);
            });
    }

    var rmpButton = document.getElementById('rmpButton');
    rmpButton.addEventListener('click', function() {
        window.open('https://www.ratemyprofessors.com/professor/1', '_blank');
        // window.open('https://www.ratemyprofessors.com/search.jsp', '_blank');
    });

    var moreInfoButton = document.getElementById('moreInfoButton');
    moreInfoButton.addEventListener('click', function() {
        if(flipCount % 2 == 1){
            loadMoreInfo();
        } else{
            goBack();
        }
        flipCount += 1;
        
    });
    
});