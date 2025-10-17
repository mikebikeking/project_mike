export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  external?: string;
  reverse?: boolean;
}

export interface Job {
  company: string;
  position: string;
  period: string;
  duties: string[];
}

export interface ContactFormProps {
  onClose: () => void;
}

export interface SocialLink {
  icon: React.ReactNode;
  url: string;
}
