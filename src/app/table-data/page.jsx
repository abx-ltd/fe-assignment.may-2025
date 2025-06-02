"use client";

import { useState, useEffect } from "react";
import { loadCSVFromFile } from "@/utils/csvParser";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader2, Database, AlertCircle } from "lucide-react";
import { CustomerDataTable } from "@/components/table-data/CustomerDataTable";

export default function TableDataPage() {
  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Load CSV data from the public directory
        const data = await loadCSVFromFile("/customers-100.csv");

        if (data && data.length > 0) {
          setCustomerData(data);
        } else {
          setError("No data found in the CSV file");
        }
      } catch (err) {
        console.error("Error loading CSV data:", err);
        setError(
          "Failed to load customer data. Please check if the CSV file exists."
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="container py-12 mx-auto max-w-7xl">
        <Card className="border shadow-sm border-border/40">
          <CardContent className="flex items-center justify-center h-80">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>
                <div className="absolute p-1 rounded-full -bottom-1 -right-1 bg-background">
                  <Database className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">Loading Customer Data</h3>
                <p className="text-sm text-muted-foreground">
                  Please wait while we fetch your data...
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-12 mx-auto max-w-7xl">
        <Card className="border border-red-200 shadow-sm">
          <CardHeader className="border-b border-red-200 bg-red-50">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <CardTitle className="text-red-700">Error Loading Data</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="font-medium text-red-600">{error}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Make sure the customers-100.csv file is available in the public
              directory.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-7xl h-[90vh] shadow-lg rounded-2xl overflow-hidden max-w-">
        <CustomerDataTable data={customerData} />
      </div>
    </div>
  );
}
