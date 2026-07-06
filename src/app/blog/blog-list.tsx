import { blogPostData as blogPostData1 } from "./introducing-yellow-sunflower/data";
import BlogPost1Content from "./introducing-yellow-sunflower/page";

import { blogPostData as blogPostData2 } from "./announcing-tynding-R-package-typst/data";
import BlogPost2Content from "./announcing-tynding-R-package-typst/page";

import { blogPostData as blogPostData3 } from "./migrating-from-pagedown-to-typst/data";
import BlogPost3Content from "./migrating-from-pagedown-to-typst/page";

import { blogPostData as blogPostData4 } from "./introducing-ninejs/data";
import BlogPost4Content from "./introducing-ninejs/page";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  readingTime: string;
  date: string;
  content: React.JSX.Element;
  isAvailable: boolean;
};

export const blogPosts: BlogPost[] = [
  { ...blogPostData4, content: <BlogPost4Content /> },
  { ...blogPostData3, content: <BlogPost3Content /> },
  { ...blogPostData2, content: <BlogPost2Content /> },
  { ...blogPostData1, content: <BlogPost1Content /> },
];
