try{
    chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    // Check if URL includes "ratemyprof"
    if (details.url.includes("https://www.ratemyprofessors.com/professor/")) {
      console.log("URL updated on Rate My Professors:", details.url);

      // Send message to content script with URL details
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { url: details.url });
      });
    }
  });
} catch(error){
  console.error('An error occurred:', error);
}

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received from content script:", message);
  // You can handle the received message here
});

