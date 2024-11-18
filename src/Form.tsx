import { toast, Toaster } from "sonner";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Textarea } from "./components/ui/textarea";
import { useForm } from "react-hook-form";

const Form = () => {
  const newForm = useForm({
    defaultValues: {
      username: "",
      email: "",
      contact: "",
      message: "",
      application: "",
    },
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className=" w-[50%]">
        <CardHeader>
          <CardTitle className="text-center">Bug Report Form</CardTitle>
          <CardDescription className="text-center">
            Report the bugs here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-5">
            <div className="grid w-full  items-center gap-1.5">
              <label htmlFor="text">Username</label>
              <Input
                type="text"
                id="text"
                placeholder="Username"
                {...newForm.register("username")}
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                {...newForm.register("email")}
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label htmlFor="number">Contact</label>
              <Input
                type="number"
                placeholder="Contact"
                {...newForm.register("contact")}
              />
            </div>
            <div>
              <label htmlFor="apps">Select your favourite app</label>

              <Select
                onValueChange={(v) => {
                  console.log(v);
                  newForm.setValue("application", v);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select application" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select the most used application</SelectLabel>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="insta">Instagram</SelectItem>
                    <SelectItem value="yt">Youtube</SelectItem>
                    <SelectItem value="sc">Snapchat</SelectItem>
                    <SelectItem value="tiktok">Tiktok</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label htmlFor="msg">Message</label>
              <Textarea
                placeholder="Type your message here."
                {...newForm.register("message")}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="bg-red-600 hover:bg-red-500"
            onClick={() => {
              toast.error("Couldn't submit the form");
            }}
          >
            Cancel
          </Button>
          <Toaster richColors />
          <Button
            className="bg-green-700 hover:bg-green-600"
            onClick={() => {
              toast.success("Form submitted successfully");
              const values = newForm.getValues();
              console.log(values);
            }}
          >
            Deploy
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Form;
