# Bug Template

## Description

Copy bug template information based on selected platform.

## Features

<img width="497" alt="Снимок экрана 2023-12-23 в 00 22 33" src="https://github.com/OmelchukDenis/BugTemplate/assets/22324885/38b6770b-c293-44b1-a2bc-abfcbabd7188">

<img width="786" alt="Снимок экрана 2023-12-23 в 00 23 51" src="https://github.com/OmelchukDenis/BugTemplate/assets/22324885/441150aa-ab47-46be-a3b0-2f41b43646b2">



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

