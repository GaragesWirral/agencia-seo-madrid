
export interface ServiceItem {
  id: string;
  title: string;
  description: string | string[];
  details?: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface NavItem {
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
}
