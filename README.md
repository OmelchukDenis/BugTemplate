# Google Chrome extension - Bug Template

## Description

Copy in buffer bug template based on selected platform.

## Features

Open extension:

<img width="497" alt="Open extension" src="https://github.com/OmelchukDenis/BugTemplate/assets/22324885/7de50fb0-1f05-4df9-bea2-d0f44ad25e95">

Copy template:

<img width="492" alt="Copy template in buffer" src="https://github.com/OmelchukDenis/BugTemplate/assets/22324885/88b8c861-997e-45f3-b145-64b1efa7c901">

Change template:

<img width="495" alt="Change template" src="https://github.com/OmelchukDenis/BugTemplate/assets/22324885/4a5bda72-0513-4d5d-b4e6-a341c5ff1b34">
<img width="493" alt="Success change template" src="https://github.com/OmelchukDenis/BugTemplate/assets/22324885/77b6e3a3-a91c-427a-bbf9-12fa70ef3d8f">

Set data from buffer:

<img width="786" alt="Set data from buffer" src="https://github.com/OmelchukDenis/BugTemplate/assets/22324885/441150aa-ab47-46be-a3b0-2f41b43646b2">



## Installation

1. Clone the repository or download the ZIP file.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the folder where you cloned/downloaded the extension.

## Usage

1. Click on the extension icon in the Chr ome toolbar.
2. A popup will appear with options.
3. Choose a platform and customize the data.
4. Click "Copy" to copy the data to the clipboard.
5. (Optional) The extension interacts with a button on the webpage with id `create_link`.

## Customizing Data

To customize the text that appears in the extension, follow these steps:

1. Locate the `data` folder in your extension directory.
2. Open the `data_ios.json`, `data_aos.json`, or `data_be.json` file based on the platform you want to customize.
3. Modify the parameter `text` within the file according to your requirements.
4. Save the changes.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the [OmelchukDenis] License - see the [LICENSE] file for details.

## Acknowledgments

- Mention any contributors or resources you used.
- If you used third-party libraries, give them credit.

