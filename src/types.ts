export interface HtmlProps {
  body: any;
  preBodyComponents: any;
  postBodyComponents: any;
  headComponents: any;
}

export interface layoutProps {
  data?: {
    site: {
      siteMetadata: {
        siteName: string;
        title: string;
        description: string;
        href: string;
        themeColour: string;
      };
    };
  };
  children?: any;
}

export interface ClassMap {
  [key: string]: string;
}

export interface ContactInfoProps {
  items: [
    {
      label: string;
      text: string;
      link: {
        href: string;
        title: string;
        newTab?: boolean;
      };
    }
  ];
}

export interface DescriptionProps {
  content: {
    title: string;
    subTitle: string;
    emphasisText: string;
    text?: string;
  };
}

export interface ListProps {
  items: string[];
}

export interface ProfileProps {
  children?: string;
}

export interface SectionTitleProps {
  children?: string;
  number?: number;
}

export interface SvgIconProps {
  height?: string;
  width?: string;
}

export interface GridProps {
  children?: any;
  columnCount?: number;
  breakpoint?: string;
}

export interface SpacerProps {
  children?: any;
  size?: string;
}

export interface AnchorProps {
  href: string;
  title?: string;
  ariaLabel?: string;
  customClass?: string;
  children: any;
  newTab?: boolean;
}
