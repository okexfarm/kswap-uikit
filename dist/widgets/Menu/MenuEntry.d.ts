import { DefaultTheme } from "styled-components";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
}
declare const LinkLabel: import("styled-components").StyledComponent<"div", any, {
    isPushed: boolean;
}, never>;
declare const MenuEntry: import("styled-components").StyledComponent<"div", any, Props, never>;
export { MenuEntry, LinkLabel };
