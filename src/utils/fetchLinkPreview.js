const fetchLinkPreview = async (url, maxRetries = 3) => {
    let retries = 0;
    while (retries < maxRetries) {
      try {
        const response = await fetch(`https://api.linkpreview.net?key=71ef2e73c260c71ccb9f612da5bb72e6&q=${url}`);
        if (!response.ok) {
          throw new Error('Failed to fetch link preview');
        }
        return response.json();
      } catch (error) {
        console.error('Error fetching link preview:', error);
        retries++;
        // Implement exponential backoff or fixed delay before retrying
        await new Promise(resolve => setTimeout(resolve, 1000 * retries)); // Retry after 1 second, 2 seconds, 3 seconds, etc.
      }
    }
    throw new Error('Max retries exceeded. Unable to fetch link preview.');
  };
  
  export default fetchLinkPreview;
  