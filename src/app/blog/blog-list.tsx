import { blogPostData as blogPostData1 } from "./introducing-yellow-sunflower/data";
import BlogPost1Content from "./introducing-yellow-sunflower/page";

import { blogPostData as blogPostData2 } from "./the-best-R-feature/data";
import BlogPost2Content from "./the-best-R-feature/page";

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
  { ...blogPostData2, content: <BlogPost2Content /> },
  { ...blogPostData1, content: <BlogPost1Content /> },
];
