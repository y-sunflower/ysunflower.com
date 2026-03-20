type PackageProps = {
  packageName: string;
  packageLang: string;
  packageDescription: string;
  isBeta: boolean;
};

export const packageList: PackageProps[] = [
  {
    packageName: "pypalettes",
    isBeta: false,
    packageLang: "Python",
    packageDescription: "A large (+2500) collection of color maps for Python",
  },
  {
    packageName: "pyfonts",
    isBeta: false,
    packageLang: "Python",
    packageDescription:
      "A simple and reproducible way of using fonts in matplotlib",
  },
  {
    packageName: "morethemes",
    isBeta: false,
    packageLang: "Python",
    packageDescription: "More themes for matplotlib",
  },
  {
    packageName: "drawarrow",
    isBeta: false,
    packageLang: "Python",
    packageDescription: "Drawing arrows for matplotlib made easy",
  },
  {
    packageName: "dayplot",
    isBeta: false,
    packageLang: "Python",
    packageDescription: "Calendar heatmaps with matplotlib",
  },
  {
    packageName: "plotjs",
    isBeta: true,
    packageLang: "Python",
    packageDescription:
      "Turn static matplotlib charts into interactive web visualizations",
  },
  {
    packageName: "bumplot",
    isBeta: false,
    packageLang: "Python",
    packageDescription: "Easily create and customize bump charts in Python",
  },
  {
    packageName: "realcolor",
    isBeta: true,
    packageLang: "Python",
    packageDescription: "Simulate colorblindness in Python charts",
  },
  {
    packageName: "r2typ",
    isBeta: true,
    packageLang: "R",
    packageDescription:
      "r2typ (R to Typst): An R package for generating Typst markup",
  },
  {
    packageName: "tynding",
    isBeta: true,
    packageLang: "R",
    packageDescription: "Typst bindings for R",
  },
  {
    packageName: "snaplot",
    isBeta: true,
    packageLang: "Python",
    packageDescription: "Record your plot process",
  },
  {
    packageName: "gifing",
    isBeta: true,
    packageLang: "Python",
    packageDescription: "A lightweight python tool for creating GIFs",
  },
];
