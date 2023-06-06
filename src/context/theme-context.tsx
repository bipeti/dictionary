import React from "react";

export type ThemeContextObj = {
    isDark: boolean;
    fontType: "Roboto" | "Poppins" | "Raleway";
};

export const ThemeContext = React.createContext<ThemeContextObj>({
    isDark: false,
    fontType: "Raleway",
});
