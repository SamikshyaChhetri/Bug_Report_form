import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Form from "./Form";
import Display from "./Display";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Form></Form>
        <Display></Display>
      </QueryClientProvider>
    </div>
  );
}

export default App;
