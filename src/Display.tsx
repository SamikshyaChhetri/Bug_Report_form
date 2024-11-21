import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "./components/ui/skeleton";
import { Button } from "./components/ui/button";
import moment from "moment";

const Display = () => {
  // To get data -> query
  // To post data -> mutation
  const queryResult = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const response = await axios.get(
        "https://lms.sachetsubedi001.com.np/api/bug-reports"
      );
      return response.data;
    },
  });

  if (queryResult.isLoading) {
    return (
      <div>
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </div>
    );
  }
  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      {queryResult.data.data.map((report: any) => {
        return (
          <div className=" p-4 border border-blue-300 w-full md:w-[50%] rounded-md bg-blue-50 shadow-sm ">
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <div className="text-lg font-medium ">
                  <h1>{report.username}</h1>
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Email:</strong>
                  {report.email}
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Contact:</strong> {report.contact}
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Application:</strong> {report.application}
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Message:</strong> {report.message}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button className="bg-red-600 hover:bg-red-700 px-8">
                  Delete
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                  Resolved
                </Button>
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-500 flex justify-between ">
              <div>
                <strong>Submitted At: </strong>
                {report.createdAt
                  ? moment(report.createdAt).format("DD MMM, YYYY")
                  : "Unknown"}
              </div>
              <div>
                <strong>Resolved at: </strong>
                {report.resolvedAt
                  ? moment(report.resolvedAt).format("DD MMM, YYYY")
                  : "Not Resolved"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Display;
