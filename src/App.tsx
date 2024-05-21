import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import PageRouter from "./routes/PageRouter";
function App() {
	return (
		<MantineProvider>
			<PageRouter />
		</MantineProvider>
	);
}

export default App;
