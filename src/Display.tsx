import { Icon } from "@iconify/react/dist/iconify.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import moment from "moment";
import { toast } from "sonner";
import { Button } from "./components/ui/button";
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
import { Skeleton } from "./components/ui/skeleton";

const Display = () => {
  const queryClient = useQueryClient();
  const deleteReportMutation = useMutation({
    mutationFn: async (report_id) => {
      await axios.put(
        "https://lms.sachetsubedi001.com.np/api/bug-reports/" + report_id
      );
    },
    onSuccess: () => {
      toast.success("Report deleted successfully!");
      queryClient.invalidateQueries({
        queryKey: ["report"],
      });
    },
    onError: (error: any) => {
      console.error("Error deleting report:", error);
      toast.error("Failed to delete report. Please try again.");
    },
  });

  const resolveReport = useMutation({
    mutationFn: async (reportId) => {
      await axios.post(
        "https://lms.sachetsubedi001.com.np/api/bug-reports/resolve/" + reportId
      );
    },
    onSuccess: () => {
      toast.success("Successfully resolved the report");
      queryClient.invalidateQueries({
        queryKey: ["report"],
      });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error);
      toast.error(error.response?.data.message || "");
    },
  });
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
          <div
            key={report.id}
            className=" p-4 border border-blue-300 w-full md:w-[50%] rounded-md bg-blue-50 shadow-sm "
          >
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant={"destructive"}>Delete</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Delete Report</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this report?
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4"></div>
                    <DialogFooter>
                      <DialogClose className="flex gap-3">
                        <Button>Cancel</Button>
                      </DialogClose>
                      <Button
                        type="submit"
                        variant={"destructive"}
                        disabled={deleteReportMutation.isPending}
                        onClick={() => {
                          deleteReportMutation.mutate(report.id);
                        }}
                      >
                        {deleteReportMutation.isPending ? (
                          <Icon icon="svg-spinners:6-dots-scale" />
                        ) : (
                          "Delete"
                        )}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 px-8"
                      disabled={report.resolved}
                    >
                      Resolved
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Mark report as Resolved</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to mark the report as resolved
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4"></div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        onClick={() => {
                          resolveReport.mutate(report.id);
                        }}
                      >
                        Resolved
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
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
