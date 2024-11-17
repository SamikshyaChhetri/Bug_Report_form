import { toast, Toaster } from "sonner";
import { Button } from "./components/ui/button";

const Component = () => {
  return (
    <div className="flex gap-4">
      <Toaster richColors position="top-right" />
      <Button
        onClick={() => {
          toast.success("Button is clicked");
        }}
      >
        shadcn Button
      </Button>

      <Button>Edit</Button>
    </div>
  );
};

export default Component;
