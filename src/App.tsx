import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Hubs = lazy(() => import("./components/Hubs/index"));

const customTheme = createTheme({
  typography: {
    fontFamily: "Kode Mono", // Replace with your font family
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<CircularProgress />}>
          <Hubs />
        </Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
