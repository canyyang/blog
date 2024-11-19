export type PageProps = {
    isMobile?: boolean
}
  
export interface InforObject {
  [key: string]: string;
}

export interface TimeItem {
    color?: string,
    children: JSX.Element
}

export interface BlogItem {
    title: string;
    time: string;
    id: string;
}
