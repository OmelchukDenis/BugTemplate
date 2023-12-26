document.addEventListener('DOMContentLoaded', function () {
  initializeLocalStorageDefaults();
  loadBugReport();

  // Add event listeners to buttons
  document.getElementById('copyButton').addEventListener('click', copyToClipboard);
  document.getElementById('changeButton').addEventListener('click', openModal);

  const textarea = document.getElementById('bugReport');
  resizeTextarea(textarea)
});

async function loadBugReport() {
  const platformRadios = document.getElementsByName('platform');
  const textarea = document.getElementById('bugReport');

  for (const radio of platformRadios) {
    radio.addEventListener('change', async function () {
      const bugReport = await loadBugReportFromStorage(this.value);
      textarea.value = bugReport;
    });
  }

  const defaultPlatform = document.querySelector('input[name="platform"]:checked');
  const defaultBugReport = await loadBugReportFromStorage(defaultPlatform.value);
  textarea.value = defaultBugReport;
  
}

async function loadBugReportFromStorage(platform) {
  return localStorage.getItem(`${platform}_bug_report`) || '';
}

function copyToClipboard() {
  const textarea = document.getElementById('bugReport');

  navigator.clipboard.writeText(textarea.value).then(function () {
    showUserMessage("Data copied");
  });
}

function openModal() {
  const platformRadios = document.getElementsByName('platform');
  const textarea = document.getElementById('bugReport');

  const modalContent = document.getElementById('modal');
  modalContent.style.display = 'block'
  modalContent.innerHTML = `
    <div id="modalContent">
      <textarea id="modalBugReport" rows="10" cols="30">${textarea.value}</textarea>
      <div class="justify-content-md-end">
        <button class="btn btn-primary btn-sm" type="button" id="saveButton">Save</button>
        <button class="btn btn-outline-secondary btn-sm" type="button" id="closeButton">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modalContent);

  // Add event listeners to modal buttons
  document.getElementById('saveButton').addEventListener('click', saveBugReport);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}

function saveBugReport() {
  const modalBugReport = document.getElementById('modalBugReport');
  const platform = document.querySelector('input[name="platform"]:checked').value;

  localStorage.setItem(`${platform}_bug_report`, modalBugReport.value);

  closeModal();
  document.getElementById('bugReport').value = modalBugReport.value;
  showUserMessage("Template updated");
}

function closeModal() {
  const modalContent = document.getElementById('modal');
  modalContent.innerHTML = '';
  modalContent.style = 'none';
}

function showUserMessage(text){
  const message = document.getElementById('message');
  message.innerHTML = `<div class="mt-2 alert alert-success">${text}</div>`;
    setTimeout(function () {
      message.innerHTML = '';
    }, 1000);
}

function resizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight + 2) + 'px';
  }

function initializeLocalStorageDefaults() {
  const platforms = ['ios', 'android', 'backend'];

  platforms.forEach((platform) => {
    const storageKey = `${platform}_bug_report`;

    if (!localStorage.getItem(storageKey)) {
      localStorage.setItem(
        storageKey,
        getDefaultBugReportText(platform)
      );
    }
  });
}

function getDefaultBugReportText(platform) {
  switch (platform) {
    case 'ios':
      return "*Device*: \n * iPhone X, iOs 14.6\n * iPhone 15 Pro Max, iOs 17.2\n\n*Build*: Build.Environment v1.5.0 ()\n\n*Steps to reproduce*:\n # Go to \n\n*Actual result*:\n\n*Expected result*:";
    case 'android':
      return "*Device*: Pixel 4a, Android 13\n\n*Build*: Build.Environment v1.5.0 ()\n\n*Steps to reproduce*:\n # Go to \n\n*Actual result*:\n\n*Expected result*:";
    case 'backend':
      return "*Steps to reproduce*:\n\n*Actual result*:\n\n*Expected result*:\n\n*Request/Response*:";
    default:
      return '';
  }
}
