import { BlogPost2 } from "./the-best-R-feature/page";
import { BlogPost1 } from "./introducing-yellow-sunflower/page";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  readingTime: string;
  body: string;
  content: React.JSX.Element;
};

export const blogPosts: BlogPost[] = [BlogPost2, BlogPost1];
