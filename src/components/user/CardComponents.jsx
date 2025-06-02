import {
  ExternalLink,
  ChevronDown,
  ClipboardList,
  ChartSpline,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  GENERAL_INFO_FIELDS,
  LOAN_TABLE_HEADERS,
  LOAN_DOCUMENTS,
  TODO_ITEMS,
} from "@/utils/data";

// Card component for General Information
export const GeneralInfoCard = ({ section }) => (
  <Card className="py-4 mb-2 border-none rounded-none shadow-none">
    <CardHeader className="border-b border-gray-200 [.border-b]:pb-3">
      <CardTitle className="flex items-center h-full text-base font-medium text-[#767676]">
        {typeof section.icon === "string" ? (
          <img src={section.icon} alt="Books" className="w-4 h-4 mr-2" />
        ) : (
          <section.icon className="w-3 h-3 mr-2" />
        )}
        {section.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {GENERAL_INFO_FIELDS.map((field) => (
          <div key={field.key}>
            <Label className="mb-2 text-xs font-bold">{field.label}</Label>
            <div className="mb-2 text-xs font-medium text-gray-500">
              {field.value}
            </div>
          </div>
        ))}
        {GENERAL_INFO_FIELDS.map((field) => (
          <div key={`${field.key}-2`}>
            <Label className="mb-2 text-xs font-bold">{field.label}</Label>
            <div className="mb-2 text-xs font-medium text-gray-500">
              {field.value}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

// Card component for Restricted Access
export const RestrictedCard = ({ section }) => (
  <Card className="py-4 mb-0 border-none rounded-none shadow-none">
    <CardHeader className="border-b border-gray-200 [.border-b]:pb-3">
      <CardTitle className="flex items-center h-full text-base font-medium text-[#767676]">
        {section.title}
        <ChevronDown className="w-4 h-4 ml-3 text-gray-200" />
        <ExternalLink className="w-4 h-4 ml-auto" />
      </CardTitle>
    </CardHeader>
  </Card>
);

// Card component for External Links
export const ExternalLinkCard = ({ section }) => (
  <Card className="py-0 border-none rounded-none shadow-none">
    <CardHeader className="border-b border-gray-200 [.border-b]:pb-3">
      <CardTitle className="flex items-center h-full text-base font-medium text-[#767676]">
        <ClipboardList className="w-4 h-4 mr-1" />
        {section.title}
        <ChevronDown className="w-4 h-4 ml-3 text-gray-200" />
        <ExternalLink className="w-4 h-4 ml-auto text-[#2979FF]" />
      </CardTitle>
    </CardHeader>
  </Card>
);

// Card component for Table Data
export const TableCard = ({ section }) => (
  <Card className="py-0 mb-0 border-none rounded-none shadow-none">
    <CardHeader className="border-b border-gray-200 [.border-b]:pb-3">
      <CardTitle className="flex items-center h-full text-base font-medium text-[#767676]">
        <img src="/Files.png" className="w-5 h-5 text-gray-200"></img>
        {section.title}
        <ChevronDown className="w-4 h-4 ml-3 text-gray-200" />
      </CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#DAE6EF] p-2 border">
            <TableRow className="text-xs ">
              {LOAN_TABLE_HEADERS.map((header) => (
                <TableHead
                  key={header.key}
                  className="h-10 text-xs whitespace-nowrap"
                >
                  {typeof header.label === "string" &&
                    header.label
                      .split("\n")
                      .map((line, index) => <div key={index}>{line}</div>)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="border">
            {LOAN_DOCUMENTS.map((doc) => (
              <TableRow key={doc.index} className="h-12 text-xs">
                <TableCell className="py-1">{doc.index}</TableCell>
                <TableCell className="py-1 min-w-[120px]">
                  <div className="text-xs">{doc.borrowerName}</div>
                  <div className="text-xs text-gray-500">{doc.loanId}</div>
                </TableCell>
                <TableCell className="py-1 min-w-[120px]">
                  <div className="text-xs">{doc.lender}</div>
                  <div className="text-xs text-gray-500">
                    {doc.interestRate}
                  </div>
                </TableCell>
                <TableCell className="flex items-center h-full gap-1 py-3 min-w-[80px]">
                  <div className="w-full h-full bg-gray-200 rounded-full">
                    <div
                      className="h-1 bg-[#294172] rounded-full"
                      style={{ width: `${doc.process}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-xs">{doc.process}%</div>
                </TableCell>
                <TableCell className="py-1">
                  <Badge className="text-xs text-[#2979FF] bg-[#E6F7FF]">
                    {doc.status}
                  </Badge>
                </TableCell>
                <TableCell className="py-1">
                  <Button variant="ghost" size="sm" className="w-4 h-4 p-0">
                    <img src="/FileText.png"></img>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);

// Card component for Empty sections
export const EmptyCard = ({ section }) => (
  <Card className="pb-0 mb-0 border-none rounded-none shadow-none">
    <CardHeader className="border-b border-gray-200 [.border-b]:pb-3">
      <CardTitle className="flex items-center h-full text-base font-medium text-[#767676]">
        <ChartSpline className="w-4 h-4 mr-1" />
        {section.title}
        <ChevronDown className="w-4 h-4 ml-3 text-gray-200" />
      </CardTitle>
    </CardHeader>
  </Card>
);

// Card component for Checklist
export const ChecklistCard = ({ section }) => (
  <Card className="mb-0 border-none rounded-none shadow-none ">
    <CardHeader className="border-b border-gray-200 [.border-b]:pb-3">
      <CardTitle className="flex items-center h-full text-base font-medium text-[#767676]">
        <img src="/NotePencil.png" className="w-4 h-4 mr-0.5"></img>
        {section.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      {TODO_ITEMS.map((item) => (
        <div key={item.id} className="flex items-center space-x-2">
          <Checkbox id={item.id} disabled={item.disabled} onChange={() => {}} />
          <Label htmlFor={item.id} className={`text-xs`}>
            {item.label}
          </Label>
          {item.hasLink && (
            <ExternalLink className="w-3 h-3 text-blue-500 hover:cursor-pointer" />
          )}
        </div>
      ))}
    </CardContent>
  </Card>
);

// Card renderer function
export const renderCard = (section) => {
  switch (section.type) {
    case "info":
      return <GeneralInfoCard key={section.id} section={section} />;
    case "restricted":
      return <RestrictedCard key={section.id} section={section} />;
    case "external":
      return <ExternalLinkCard key={section.id} section={section} />;
    case "table":
      return <TableCard key={section.id} section={section} />;
    case "empty":
      return <EmptyCard key={section.id} section={section} />;
    case "checklist":
      return <ChecklistCard key={section.id} section={section} />;
    default:
      return null;
  }
};
