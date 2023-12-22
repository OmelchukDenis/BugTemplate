document.addEventListener('DOMContentLoaded', function () {
  // Set default platform
  let selectedPlatform = 'ios';
  document.getElementById(selectedPlatform).checked = true;

  // Update textarea based on selected platform
  function updateDeviceInfo() {
    const deviceInfoTextarea = document.getElementById('deviceInfo');
    loadData(selectedPlatform).then(function (data) {
      deviceInfoTextarea.value = data.text;
      resizeTextarea(deviceInfoTextarea);
    }).catch(function (error) {
      console.error(error);
    });
  }

  // Load data from JSON file
  function loadData(platform) {
    return new Promise(function (resolve, reject) {
      chrome.runtime.getPackageDirectoryEntry(function (directoryEntry) {
        directoryEntry.getFile(`data/data_${platform}.json`, {}, function (fileEntry) {
          fileEntry.file(function (file) {
            const reader = new FileReader();
            reader.onloadend = function () {
              try {
                const data = JSON.parse(this.result);
                resolve(data);
              } catch (e) {
                reject(e);
              }
            };
            reader.readAsText(file);
          });
        }, function (error) {
          reject(error);
        });
      });
    });
  }

  // Event listener for radio buttons
  const radioButtons = document.getElementsByName('platform');
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
      selectedPlatform = this.value;
      updateDeviceInfo();
    });
  });

  // Event listener for copy button
  const copyButton = document.getElementById('copyButton');
  copyButton.addEventListener('click', function () {
    const deviceInfoTextarea = document.getElementById('deviceInfo');
    navigator.clipboard.writeText(deviceInfoTextarea.value).then(function () {
      showMessage('Data copied');
    });
  });

  // Function to display message
  function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<div class="alert alert-success">${message}</div>`;
    setTimeout(function () {
      messageDiv.innerHTML = '';
    }, 1000);
  }

  // Resize textarea based on content
  function resizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
  }

  // Add input event listener to resize textarea while typing
  const deviceInfoTextarea = document.getElementById('deviceInfo');
  deviceInfoTextarea.addEventListener('input', function () {
    resizeTextarea(this);
  });

  // Initialize textarea
  updateDeviceInfo();
});
