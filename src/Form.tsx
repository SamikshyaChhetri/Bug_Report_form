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
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";

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
              <label htmlFor="text" className="flex gap-1 items-center">
                Username
                <Icon icon="line-md:person-filled" />
              </label>
              <Input
                type="text"
                id="text"
                placeholder="Username"
                {...newForm.register("username")}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="email" className="flex gap-1 items-center">
                Email
                <Icon icon="line-md:email-twotone" />
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                {...newForm.register("email")}
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label htmlFor="number" className="flex gap-1 items-center">
                Contact
                <Icon icon="line-md:phone-call-loop" />
              </label>
              <Input
                type="number"
                placeholder="Contact"
                {...newForm.register("contact")}
              />
            </div>
            <div>
              <label htmlFor="apps" className="flex gap-1 items-center">
                Select your favourite app
                <Icon icon="icon-park-twotone:all-application" />
              </label>

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
                    <SelectItem value="facebook">
                      <div className="flex gap-1 items-center">
                        <span>Facebook</span>
                        <Icon icon="line-md:facebook" />
                      </div>
                    </SelectItem>
                    <SelectItem value="insta">
                      <div className="flex gap-1 items-center">
                        <span>Instagram</span>
                        <Icon icon="line-md:instagram" />
                      </div>
                    </SelectItem>
                    <SelectItem value="yt">
                      <div className="flex gap-1 items-center">
                        <span>Youtube</span> <Icon icon="line-md:youtube" />{" "}
                      </div>
                    </SelectItem>
                    <SelectItem value="twitter">
                      <div className="flex gap-1 items-center">
                        <span>Twitter</span>
                        <Icon icon="line-md:twitter" />{" "}
                      </div>
                    </SelectItem>
                    <SelectItem value="tiktok">
                      <div className="flex gap-1 items-center">
                        <span>Tiktok</span>
                        <Icon icon="line-md:tiktok" />{" "}
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label htmlFor="msg">
                <div className="flex gap-1 items-center">
                  <span>Message</span>
                  <Icon icon="line-md:chat-twotone" />
                </div>
              </label>
              <Textarea
                placeholder="Type your message here."
                {...newForm.register("message")}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="bg-red-600 hover:bg-red-500"
                  onClick={() => {
                    toast.error("Couldn't submit the form");
                  }}
                >
                  Cancel
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Cancel the form</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Toaster richColors />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="bg-green-700 hover:bg-green-600"
                  onClick={() => {
                    toast.success("Form submitted successfully");
                    const values = newForm.getValues();
                    console.log(values);
                  }}
                >
                  Submit
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Submit the form</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Form;
//malai ta kattiiii thik lagdaina ma deploy garxu
