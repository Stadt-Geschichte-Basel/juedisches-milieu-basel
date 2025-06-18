# Das Jüdische Basel Puzzle App

An interactive digital puzzle exploring the history of Jewish life in Basel between 1850 and 1914. The app invites users to engage with historical content, solve challenges, and unlock new content across twelve puzzle pieces. Successful participants receive a surprise museum reward.

[![GitHub issues](https://img.shields.io/github/issues/Stadt-Geschichte-Basel/juedisches-milieu-basel.svg)](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/issues)
[![GitHub stars](https://img.shields.io/github/stars/Stadt-Geschichte-Basel/juedisches-milieu-basel.svg)](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/stargazers)
[![License](https://img.shields.io/github/license/Stadt-Geschichte-Basel/juedisches-milieu-basel)](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/blob/main/LICENSE)
[![DOI](https://zenodo.org/badge/990219050.svg)](https://zenodo.org/record/15681536)
[![SWH](https://archive.softwareheritage.org/badge/origin/https://doi.org/10.5281/zenodo.15681536)](https://archive.softwareheritage.org/browse/origin/directory/?origin_url=https://doi.org/10.5281/zenodo.15681536)

## 🚀 Live Version

Access the deployed app at:  
👉 **<https://das-juedische-basel.stadtgeschichtebasel.ch/>**

## 🧩 About

This application offers a twelve-part gamified journey through the Jewish history of Basel from 1850 to 1914. Each unlocked puzzle piece reveals curated content and a question. Correct answers unlock the next stage. The experience combines historical storytelling with interactivity to foster both learning and engagement.

## 🔧 Development

This app is built using [Stencil](https://stenciljs.com/).

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

### Run unit tests

```bash
npm test
```

### Watch mode for tests

```bash
npm run test.watch
```

### Build for production

```bash
npm run build
```

### Deploy to GitHub Pages

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

* `src/`: Source code of the Stencil app
* `www/`: Static site build output
* `dist/`: Compiled output for reuse
* `docs/`: Documentation (planned)
* `Dockerfile`: For containerized deployment
* `CITATION.cff`: Citation metadata for academic use

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
