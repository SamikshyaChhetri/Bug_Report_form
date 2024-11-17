import { toast, Toaster } from "sonner";
import { Button } from "./components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
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
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>This is the content</DialogContent>
      </Dialog>

      <Button>Edit</Button>
    </div>
  );
};
export default Component;
