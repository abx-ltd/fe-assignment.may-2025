"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Sparkles } from "lucide-react";

export function EmptyState() {
  return (
    <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <CardContent className="flex flex-col items-center justify-center p-8 h-80">
        <div className="relative mb-6">
          <div className="flex items-center justify-center w-20 h-20 rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-purple-600">
            <Users className="w-10 h-10 text-slate-800" />
          </div>
          <div className="absolute flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full -top-2 -right-2">
            <Sparkles className="w-3 h-3 text-yellow-800" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text">
          No Data Available
        </h3>
        <p className="max-w-sm mt-2 text-sm text-center text-muted-foreground">
          No customer data found. Upload a CSV file or connect your data source
          to get started.
        </p>
      </CardContent>
    </Card>
  );
}
