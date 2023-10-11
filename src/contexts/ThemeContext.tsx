import React, { PropsWithChildren, createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { AppDarkTheme, AppLightTheme } from "../themes/theme";

type ColorScheme = "light" | "dark" | "auto";

type ThemeContextValue = {
	setColorScheme: (colorScheme: ColorScheme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

// En hook som returnerar rätt tema utifrån valt tema
export const useAppTheme = () => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>("auto");
	const operatingSystemScheme = useColorScheme();
	const selectedScheme = colorScheme === "auto" ? operatingSystemScheme : colorScheme;
	const theme = selectedScheme === "dark" ? AppDarkTheme : AppLightTheme;
	return theme;
};

export default function ThemeProvider({ children }: PropsWithChildren) {
	// Temat som användaren har valt inuti appen
	const [colorScheme, setColorScheme] = useState<ColorScheme>("auto");

	// Temat som OS föreslår
	const operatingSystemScheme = useColorScheme();

	// Temat som faktiskt ska användas
	const selectedScheme = colorScheme === "auto" ? operatingSystemScheme : colorScheme;

	// Välj rätt temaobjekt utifrån valt tema
	const theme = selectedScheme === "dark" ? AppDarkTheme : AppLightTheme;

	return <ThemeContext.Provider value={{ setColorScheme }}>{children}</ThemeContext.Provider>;
}

// Liten hook som kommer gå att använda i onPress eller liknande vid eventuell toggle om inte den ska agera auto mot os
const useSetColorScheme = () => useContext(ThemeContext);

