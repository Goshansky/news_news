export interface Attachment {
  type: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
  link?: string;
  caption?: string;
  titleLink?: string;
  description?: string;
}

export interface NewsItem {
  id: number;
  text: string;
  date: number;
  type: string;
  attachments: Attachment[];
}