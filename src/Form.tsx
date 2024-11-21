import { toast } from "sonner";
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
  TooltipTrigger,
} from "./components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./components/ui/dialog";

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
      <Card className=" w-[50%] bg-blue-50 border-black">
        <CardHeader>
          <CardTitle className="text-center">Bug Report Form</CardTitle>
          <CardDescription className="text-center">
            Report the bugs here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col w-full   items-left gap-1.5">
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
            <div className="flex flex-col w-full items-left gap-1.5">
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
            <div className="flex flex-col w-full  items-left gap-1.5">
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
            <div className="flex flex-col w-full items-left gap-1.5">
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
                        <span>Youtube</span> <Icon icon="line-md:youtube" />
                      </div>
                    </SelectItem>
                    <SelectItem value="twitter">
                      <div className="flex gap-1 items-center">
                        <span>Twitter</span>
                        <Icon icon="line-md:twitter" />
                      </div>
                    </SelectItem>
                    <SelectItem value="tiktok">
                      <div className="flex gap-1 items-center">
                        <span>Tiktok</span>
                        <Icon icon="line-md:tiktok" />
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col w-full  items-left gap-1.5">
              <label htmlFor="msg">
                <div className="flex flex-row items-center">
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
        <CardFooter className="flex justify-end">
          <Dialog>
            <DialogTrigger>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-green-700 hover:bg-green-600 hover:text-white text-white"
                  >
                    Submit
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Submit the form</TooltipContent>
              </Tooltip>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Submit report</DialogTitle>
                <DialogDescription>
                  Are you sure you want to submit the report?
                </DialogDescription>
              </DialogHeader>
              <div className=" flex flex-col gap-4 py-4">
                <div className=" items-center gap-4">
                  <label
                    htmlFor="Username"
                    className="text-right flex flex-row gap-2"
                  >
                    Username: <div>{newForm.watch("username")}</div>
                  </label>
                </div>
                <div className=" items-center gap-4">
                  <label
                    htmlFor="email"
                    className="text-right flex flex-row gap-2"
                  >
                    Email: <div>{newForm.watch("email")}</div>
                  </label>
                </div>
                <div className="items-center gap-4">
                  <label
                    htmlFor="number"
                    className="text-right flex flex-row gap-2"
                  >
                    Contact:
                    <div>{newForm.watch("contact")}</div>
                  </label>
                </div>
                <div className=" items-center gap-4">
                  <label
                    htmlFor="apps"
                    className="text-right flex flex-row gap-2 "
                  >
                    Favourite application:
                    <div>{newForm.watch("application")}</div>
                  </label>
                </div>
                <div className=" items-center gap-4">
                  <label
                    htmlFor="message"
                    className="text-right flex flex-row gap-2"
                  >
                    Message: <div>{newForm.watch("message")}</div>
                  </label>
                </div>
              </div>
              <DialogFooter className="flex gap-72">
                <DialogClose>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="bg-red-600 hover:bg-red-500"
                        onClick={() => {
                          toast.error("Form has been cancelled");
                        }}
                      >
                        Cancel
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Cancel the form</TooltipContent>
                  </Tooltip>
                </DialogClose>
                <DialogClose>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="bg-green-700 hover:bg-green-600"
                        onClick={() => {
                          const values = newForm.getValues(); // Get form values
                          console.log(values); // Log values (replace with actual submission logic)
                          toast.success("Form successfully submitted!");
                        }}
                      >
                        Submit
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Submit the form</TooltipContent>
                  </Tooltip>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Form;
