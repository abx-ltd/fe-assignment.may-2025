import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Circle } from "lucide-react";
import { TICKET_DATA } from "@/utils/data";
import { TicketProperties } from "./TicketProperties";

export function TicketDescription({ description, onAddSubTickets }) {
  return (
    <Card className="py-1 mb-6 border-none rounded-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="flex items-center gap-2 font-normal text-gray-600 border-b border-gray-200">
          <FileText className="w-5 h-8" />
          Description
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm leading-relaxed text-gray-700">
          {description.map((item, index) => (
            <div key={index} className="flex items-start gap-2 mb-2">
              <Circle color="#005B86" />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <Button
          variant="link"
          className="h-auto p-0 text-[#005B86]"
          onClick={onAddSubTickets}
        >
          <Plus className="w-4 h-4 mr-1" />
          Add sub-tickets
        </Button>
      </CardContent>
    </Card>
  );
}
