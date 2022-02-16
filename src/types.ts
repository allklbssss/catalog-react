export type ListItemType = "telegram" | "instagram"
export interface ListItem {
    title: string;
    text: string;
    type: ListItemType;
    link: string;
}