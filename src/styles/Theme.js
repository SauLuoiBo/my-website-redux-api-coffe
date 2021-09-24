import { ThemeProvider } from "styled-components";
import theme from "../themes/default";
import GlobalStyles from "./globals";

const Theme = ({ children }) => (
	<ThemeProvider theme={theme.light}>
		<GlobalStyles />
		{children}
	</ThemeProvider>
);

export default Theme;
