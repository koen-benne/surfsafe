browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'closeTab') {
    // Close the current tab
    browser.tabs.remove(sender.tab.id);
  }
  if (message.action === 'startChecker') {
    // Start the checker
    startChecker();
  }
});

async function startChecker() {
  let previousFrameData = null;

  function captureFrame() {
    // Capture the visible tab as an image
    browser.tabs.captureVisibleTab(null, { format: 'png' }, function(dataUrl) {
      // Create an <img> element to load the captured image
      let img = new Image();
      img.onload = function() {
        // Create a <canvas> element to draw the image
        let canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Get the pixel data of the current frame
        const currentFrameData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        // Compare pixel data with the previous frame (if available)
        if (previousFrameData) {
          const pixelCount = currentFrameData.length / 4; // 4 components per pixel (R, G, B, and Alpha)

          let totalBrightnessDiff = 0;
          for (let i = 0; i < currentFrameData.length; i += 4) {
            // Calculate the brightness difference between the current and previous frames
            const currentPixelBrightness = (
              currentFrameData[i] +
              currentFrameData[i + 1] +
              currentFrameData[i + 2]
            ) / 3;

            const previousPixelBrightness = (
              previousFrameData[i] +
              previousFrameData[i + 1] +
              previousFrameData[i + 2]
            ) / 3;

            totalBrightnessDiff += Math.abs(currentPixelBrightness - previousPixelBrightness);
          }

          // Calculate the average brightness difference
          const averageBrightnessDiff = totalBrightnessDiff / pixelCount;

          // You can set a threshold value to determine if there's a flash
          const threshold = 50;
          if (averageBrightnessDiff > threshold) {
            console.log('Flash detected!');
            sendMessageToContentScript({ action: 'flashDetected' });
          }
        }

        // Store the current frame data as the previous frame for the next iteration
        previousFrameData = currentFrameData;

        // Call the captureFrame function again in the next frame
        requestAnimationFrame(captureFrame);
      };

      // Load the captured image
      img.src = dataUrl;
    });
  }

  // Start capturing frames
  setTimeout(captureFrame, 500);
}

function sendMessageToContentScript(message) {
  browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Find the active tab and send the message
    browser.tabs.sendMessage(tabs[0].id, message);
  });
}
