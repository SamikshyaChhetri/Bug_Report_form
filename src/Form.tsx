import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { createSchema } from "./FormValid";

const Form = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const newForm = useForm({
    defaultValues: {
      username: "",
      email: "",
      contact: "",
      message: "",
      application: "",
    },
    resolver: zodResolver(createSchema),
  });
  const queryClient = useQueryClient();
  const submitDataMutation = useMutation({
    mutationFn: async () => {
      const values = newForm.getValues(); // Get form values
      const response = await axios.post(
        "https://lms.sachetsubedi001.com.np/api/bug-reports",
        values
      );
      return response.data;
      console.log(response.data);
    },
    onSuccess: () => {
      toast.success("Bug report submitted successfully");
      queryClient.invalidateQueries({
        queryKey: ["report"],
      });
      setDialogOpen(false);
      newForm.reset();
    },
    onError: () => {
      toast.error("Failed to submit the bug report");
      setDialogOpen(false);
    },
  });
  const onSubmit = () => {
    setDialogOpen(true);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen  ">
      <Card className=" w-[50%] bg-blue-50 border border-blue-300 ">
        <form onSubmit={newForm.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="text-center">Bug Report Form</CardTitle>
            <CardDescription className="text-center">
              Report the bugs here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
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
                <label className="text-red-500 text-sm">
                  {newForm.formState.errors.username?.message}
                </label>
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
                <label className="text-red-500 text-sm">
                  {newForm.formState.errors.email?.message}
                </label>
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
                <label className="text-red-500 text-sm">
                  {newForm.formState.errors.contact?.message}
                </label>
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
                      <SelectLabel>
                        Select the most used application
                      </SelectLabel>
                      <SelectItem value="facebook">
                        <div className="flex gap-1 items-center">
                          <span>Facebook</span>
                          <Icon icon="line-md:facebook" />
                        </div>
                      </SelectItem>
                      <SelectItem value="instagram">
                        <div className="flex gap-1 items-center">
                          <span>Instagram</span>
                          <Icon icon="line-md:instagram" />
                        </div>
                      </SelectItem>
                      <SelectItem value="youtube">
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
                <label className="text-red-500 text-sm">
                  {newForm.formState.errors.application?.message}
                </label>
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
                <label className="text-red-500 text-sm">
                  {newForm.formState.errors.message?.message}
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Dialog open={dialogOpen}>
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
                            setDialogOpen(false);
                            newForm.reset();
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
                          disabled={submitDataMutation.isPending}
                          onClick={() => {
                            const values = newForm.getValues(); // Get form values
                            submitDataMutation.mutate();

                            console.log(values);
                          }}
                        >
                          {submitDataMutation.isPending ? (
                            <Icon icon="svg-spinners:6-dots-scale" />
                          ) : (
                            "Submit"
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Submit the form</TooltipContent>
                    </Tooltip>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
export default Form;
