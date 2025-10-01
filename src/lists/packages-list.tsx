type PackageProps = {
  packageName: string;
  packageDescription: string;
  packageTags: string[];
};

export const packageList: PackageProps[] = [
  {
    packageName: "pypalettes",
    packageDescription: "A large (+2500) collection of color maps for Python",
    packageTags: ["matplotlib", "color"],
  },
  {
    packageName: "pyfonts",
    packageDescription:
      "A simple and reproducible way of using fonts in matplotlib",
    packageTags: ["matplotlib", "font", "reproductibility"],
  },
  {
    packageName: "morethemes",
    packageDescription: "More themes for matplotlib",
    packageTags: ["matplotlib", "theme"],
  },
  {
    packageName: "drawarrow",
    packageDescription: "Drawing arrows for matplotlib made easy",
    packageTags: ["matplotlib", "arrow"],
  },
  {
    packageName: "dayplot",
    packageDescription: "Calendar heatmaps with matplotlib",
    packageTags: ["matplotlib", "calendar", "heatmap"],
  },
  {
    packageName: "bumplot",
    packageDescription: "Easily create and customize bump charts in Python",
    packageTags: ["matplotlib", "bump", "curve"],
  },
];
