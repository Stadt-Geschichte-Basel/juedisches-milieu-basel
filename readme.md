# Das Jüdische Basel Puzzle App

An interactive digital puzzle exploring the history of Jewish life in Basel between 1850 and 1914. The app invites users to engage with historical content, solve challenges, and unlock new content across twelve puzzle pieces. Successful participants receive a surprise museum reward.

[![Deploy to GitHub Pages](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/actions/workflows/deploy-gh-pages.yml)
[![GitHub issues](https://img.shields.io/github/issues/Stadt-Geschichte-Basel/juedisches-milieu-basel.svg)](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/issues)
[![GitHub stars](https://img.shields.io/github/stars/Stadt-Geschichte-Basel/juedisches-milieu-basel.svg)](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE-CCBY.md)
[![DOI](https://zenodo.org/badge/990219050.svg)](https://zenodo.org/record/15681536)
[![SWH](https://archive.softwareheritage.org/badge/origin/https://doi.org/10.5281/zenodo.15681536)](https://archive.softwareheritage.org/browse/origin/directory/?origin_url=https://doi.org/10.5281/zenodo.15681536)

## 📋 Table of Contents

- [Live Version](#-live-version)
- [About](#-about)
- [Features](#-features)
- [How It Works](#-how-it-works)
- [Technology Stack](#-technology-stack)
- [Development](#-development)
- [Docker](#-docker)
- [Repository Structure](#-repository-structure)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Citation](#-citation)
- [Support](#-support)
- [Contributors](#-contributors)
- [License](#-license)
- [Versioning](#-versioning)

## 🚀 Live Version

Access the deployed app at:  
👉 **<https://das-juedische-basel.stadtgeschichtebasel.ch/>**

## 🧩 About

This application offers a twelve-part gamified journey through the Jewish history of Basel from 1850 to 1914. Each unlocked puzzle piece reveals curated content and a question. Correct answers unlock the next stage. The experience combines historical storytelling with interactivity to foster both learning and engagement.

## ✨ Features

- **Interactive Puzzle Gameplay**: 12 interconnected puzzle pieces to unlock sequentially
- **Historical Content**: Curated narratives about Jewish life in Basel (1850-1914)
- **Gamified Learning**: Questions and challenges that engage users actively
- **Progressive Unlocking**: Correct answers reveal content and unlock next stages
- **Museum Reward**: Successful completion grants a special museum prize
- **Offline Support**: Service worker enables offline functionality
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Multi-language Support**: Available in German (primary language)
- **Open Source**: Both code and content are openly licensed

## 🎮 How It Works

1. **Start the Journey**: Begin with the first puzzle piece
2. **Explore Content**: Read historical narratives and view curated materials
3. **Answer Questions**: Test your knowledge with questions related to the content
4. **Unlock Progress**: Correct answers reveal the reverse of the puzzle piece and unlock the next stage
5. **Complete the Puzzle**: Work through all 12 pieces to complete the full picture
6. **Claim Your Reward**: Receive a special museum entry as a prize for completion

The application stores your progress locally, so you can continue where you left off at any time.

## 💻 Technology Stack

- **Framework**: [Stencil.js](https://stenciljs.com/) - Web Components compiler
- **Language**: TypeScript
- **UI Components**: [Ionic Framework](https://ionicframework.com/)
- **Storage**: @ionic/storage for local data persistence
- **Design System**: @geovistory/design-system-web
- **Deployment**: GitHub Pages, Docker

## 🔧 Development

### Prerequisites

- Node.js 18.x or higher
- npm (comes with Node.js)
- Git

### Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel.git
cd juedisches-milieu-basel
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm start
```

The app will be available at `http://localhost:3333`

### Testing

**Run unit tests**

```bash
npm test
```

**Watch mode for tests**

```bash
npm run test.watch
```

### Building

**Build for production**

```bash
npm run build
```

The production build will be available in the `www/` directory.

### Deployment

**Deploy to GitHub Pages**

```bash
npm run deploy
```

## 🐳 Docker

Build image:

```bash
docker build -t juedisches-basel-app .
```

Run container:

```bash
docker run -d -p 8080:8080 --name jb-app juedisches-basel-app
```

Stop and remove:

```bash
docker rm -f jb-app
docker image rm juedisches-basel-app
```

## 📦 Repository Structure

```
juedisches-milieu-basel/
├── src/                    # Source code
│   ├── components/         # Stencil web components
│   ├── assets/            # Static assets (images, fonts, etc.)
│   ├── global/            # Global styles and scripts
│   └── index.html         # Main HTML entry point
├── www/                    # Static site build output
├── dist/                   # Compiled output for distribution
├── .github/               # GitHub workflows and configuration
├── Dockerfile             # For containerized deployment
├── CITATION.cff           # Citation metadata for academic use
├── CONTRIBUTING.md        # Contribution guidelines
├── CODE_OF_CONDUCT.md     # Community code of conduct
├── SECURITY.md            # Security policy
├── CHANGELOG.md           # Version history and changes
├── LICENSE                # MIT License for code
├── LICENSE-CCBY.md        # CC BY 4.0 License for content
└── package.json           # Project dependencies and scripts
```

## 🔧 Troubleshooting

### Common Issues

**Issue: `npm install` fails**
- Ensure you have Node.js 18.x or higher installed
- Try deleting `node_modules/` and `package-lock.json`, then run `npm install` again
- Check your internet connection

**Issue: Development server won't start**
- Make sure port 3333 is not already in use
- Try running `npm run build` first to check for compilation errors
- Check the console output for specific error messages

**Issue: Build fails**
- Ensure all dependencies are installed: `npm install`
- Clear the build cache: `rm -rf www/ dist/`
- Check for TypeScript errors: `npx tsc --noEmit`

**Issue: Docker container won't start**
- Ensure Docker is running
- Check if port 8080 is already in use
- Review Docker logs: `docker logs jb-app`

**Issue: Tests failing**
- Make sure you're using the correct Node.js version
- Try running tests individually to isolate the problem
- Check if Puppeteer is properly installed

For more help, please [open an issue](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/issues).

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to your fork: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please also read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## 📄 Citation

If you use this software in your research, please cite:

> Pfister, Beni, Jonas Schneider, David Knecht, Moritz Mähr, and KleioLab GmbH. ‘Juedisches-milieu-basel’. Zenodo, 17 June 2025. [https://doi.org/10.5281/zenodo.15681536](https://doi.org/10.5281/zenodo.15681536).

These data are openly available to everyone and can be used for any research or educational purpose. If you use this data in your research, please cite as specified in [CITATION.cff](CITATION.cff). The following citation formats are also available through _Zenodo_:

* [BibTeX](https://zenodo.org/record/15681537/export/hx)
* [CSL](https://zenodo.org/record/15681537/export/csl)
* [DataCite](https://zenodo.org/record/15681537/export/dcite4)
* [Dublin Core](https://zenodo.org/record/15681537/export/xd)
* [DCAT](https://zenodo.org/record/15681537/export/dcat)
* [JSON](https://zenodo.org/record/15681537/export/json)
* [JSON-LD](https://zenodo.org/record/15681537/export/schemaorg_jsonld)
* [GeoJSON](https://zenodo.org/record/15681537/export/geojson)
* [MARCXML](https://zenodo.org/record/15681537/export/xm)

## 📬 Support

Please use the [GitHub Issues](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/issues) tab to report bugs, suggest features, or ask questions.

## 🧑‍💻 Contributors

* **Beni Pfister** – Content, editing
* **Jonas Schneider** – Design, concept, development
* **David Knecht** – Project management
* **Moritz Mähr** – Deployment ([ORCID](https://orcid.org/0000-0002-1367-1618))

See [contributors graph](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/graphs/contributors)

## 🪪 License

* **Code**: [MIT License](LICENSE)
* **Content & Data**: [CC BY 4.0](LICENSE-CCBY.md)

## 📈 Versioning

We follow [Semantic Versioning](https://semver.org). Releases are available via [GitHub Releases](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/releases) and archived on Zenodo.
