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

const Form = () => {
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
              <Input type="text" id="text" placeholder="Username" />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="email">Email</label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label htmlFor="number">Contact</label>
              <Input type="number" id="number" placeholder="Contact" />
            </div>
            <div>
              <label htmlFor="apps">Select your favourite app</label>

         
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Form;
