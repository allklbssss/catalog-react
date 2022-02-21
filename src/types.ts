export type ListItemType = "telegram" | "instagram"
export interface ListItem {
    avatar: string;
    path: string;
    title: string;
    text: string;
    type: ListItemType;
    link: string;
    followers: string;
    posts?: string;
    following?: string;
}

export interface ListItemProps {
    path: string;
    title: string;
    text: string;
    type: ListItemType;
}