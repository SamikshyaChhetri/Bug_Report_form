import { toast, Toaster } from "sonner";
import { Button } from "./components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";

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

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>This is the content</DialogContent>
      </Dialog>

      <Button>Edit</Button>
    </div>
  );
};

export default Component;
