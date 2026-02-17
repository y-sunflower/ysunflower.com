export type ResourceKind =
  | "Template"
  | "Guide"
  | "Website"
  | "Overview"
  | "Tool";

export type ResourceProps = {
  resourceName: string;
  resourceKind: ResourceKind;
  resourceDescription: string;
  repositoryUrl: string;
  websiteUrl?: string;
};

export const resourcesList: ResourceProps[] = [
  {
    resourceName: "python-package-template",
    resourceKind: "Template",
    resourceDescription:
      "Production-ready template for Python packages with tests, docs, releases, and CI/CD.",
    repositoryUrl: "https://github.com/y-sunflower/python-package-template",
  },
  {
    resourceName: "quarto-parametrized-template-R",
    resourceKind: "Template",
    resourceDescription:
      "A Quarto template for parameterized report generation in R workflows.",
    repositoryUrl:
      "https://github.com/y-sunflower/quarto-parametrized-template-R",
  },
  {
    resourceName: "python-packaging-essentials",
    resourceKind: "Guide",
    resourceDescription:
      "Hands-on guide for creating, structuring, testing, and publishing Python packages.",
    repositoryUrl: "https://github.com/y-sunflower/python-packaging-essentials",
    websiteUrl: "https://y-sunflower.github.io/python-packaging-essentials/",
  },
  {
    resourceName: "python-dependency-explorer",
    resourceKind: "Tool",
    resourceDescription:
      "Website to inspect and verify dependency trees in Python packages to make sure of what you're installing.",
    repositoryUrl: "https://github.com/y-sunflower/python-dependency-explorer",
    websiteUrl: "https://y-sunflower.github.io/python-dependency-explorer/",
  },
];
