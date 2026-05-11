export type ISODate = `${number}-${number}-${number}`;

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: ISODate;
  readTime: string;
  content: string;
  /** Absolute or root-relative URL of the post's hero image (1200×630 recommended).
   * Falls back to site's default OG image when omitted. */
  coverImage?: string;
  /** Author name for BlogPosting schema. Defaults to "RokdBot Team". */
  author?: string;
}
