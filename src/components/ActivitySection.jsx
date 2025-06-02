"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileText, ArrowUp, Clock4 } from "lucide-react";

const getActivityTypeColor = (type) => {
  switch (type) {
    case "success":
      return "bg-green-500";
    case "info":
      return "bg-blue-500";
    case "warning":
      return "bg-yellow-500";
    case "error":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export function ActivitySection({ activities, onAddComment }) {
  const [comment, setComment] = useState("");

  const handleSubmitComment = () => {
    if (comment.trim()) {
      onAddComment(comment);
      setComment("");
    }
  };

  return (
    <Card className="py-1 mb-6 border-none rounded-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="flex items-center gap-2 font-normal text-gray-600 border-b border-gray-200 h-[34px]">
          <FileText className="w-5 h-5" />
          Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="space-y-4">
            {activities.map((item, index) => (
              <div key={index} className="relative flex items-start gap-3">
                {index < activities.length - 1 && (
                  <div className="absolute left-[7px] top-4 bottom-[-16px] w-px bg-gray-300"></div>
                )}
                <div className="relative z-10 p-1 bg-white rounded-full">
                  <div
                    className={`w-2 h-2 rounded-full ${getActivityTypeColor(
                      item.type
                    )}`}
                  ></div>
                </div>
                <div className="flex items-start space-x-1 text-sm">
                  <span className="font-medium">{item.user}</span>
                  <span className="text-gray-600">{item.action}</span>
                  <Clock4 width={11} />
                  <span className="mt-1 text-xs text-gray-500">
                    {item.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comment Box */}
        <div className="pt-4 mt-6">
          <div className="relative">
            <Textarea
              placeholder="Leave a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[80px] pr-12 resize-none border-none bg-[#ECECEC] placeholder:text-[12px] focus-visible:border-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                  handleSubmitComment();
                }
              }}
            />
            <Button
              size="sm"
              className="absolute bottom-2 right-2"
              disabled={!comment.trim()}
              onClick={handleSubmitComment}
              variant="ghost"
            >
              <ArrowUp className="w-4 h-4" color="#005B86" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
