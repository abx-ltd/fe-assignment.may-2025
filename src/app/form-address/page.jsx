"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, resetFormData } from "@/store/formSlice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import VietnamAddressField from "@/components/form/VietnamAddressField";
import { Trash2, Eye, MapPin, Sparkles, Home, Loader2 } from "lucide-react";

export default function FormAddress() {
  const dispatch = useDispatch();
  const savedData = useSelector((state) => state.form.data);

  const schemaProperties = {
    address: {
      type: "string",
      title: "Địa chỉ chi tiết",
      "x-custom": "vietnamAddress",
    },
    province: {
      type: "string",
      title: "Tỉnh/Thành phố",
    },
  };

  const [formState, setFormState] = useState(savedData || {});
  const [isLoading, setIsLoading] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = async (key, value) => {
    setIsSaving(true);

    // Simulate API delay for demonstration
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (key === "province" && value) {
      const newForm = {
        ...formState,
        province: value,
        district: "",
      };
      setFormState(newForm);
      dispatch(setFormData(newForm));
      setIsSaving(false);
      return;
    }
    // Update the specific field in the form state
    const newForm = { ...formState, [key]: value };
    setFormState(newForm);
    dispatch(setFormData(newForm));
    setIsSaving(false);
  };

  const handleReset = async () => {
    setIsResetting(true);

    // Simulate API delay for demonstration
    await new Promise((resolve) => setTimeout(resolve, 800));

    setFormState({
      province: "",
      district: "",
      street: "",
    });
    dispatch(resetFormData());
    setIsResetting(false);
  };

  const renderField = (key, field) => {
    if (field["x-custom"] === "vietnamAddress") {
      return (
        <div key={key} className="space-y-4">
          <VietnamAddressField
            key={`${formState.province}-${formState.district}-${formState.street}`}
            addressValue={formState.address || ""}
            provinceValue={formState.province || ""}
            onAddressChange={(address) => handleChange("address", address)}
            onProvinceChange={(province) => handleChange("province", province)}
            onDistrictChange={(district) => handleChange("district", district)}
            onStreetChange={(street) => handleChange("street", street)}
            formState={formState}
            isLoading={isSaving}
            disabled={isSaving || isResetting}
          />
        </div>
      );
    }

    if (key === "province") {
      return null;
    }

    return (
      <div key={key} className="space-y-3">
        <Label className="text-base font-medium text-gray-700">
          {field.title}
        </Label>
        <Input
          value={formState[key] || ""}
          onChange={(e) => handleChange(key, e.target.value)}
          className="w-full h-12 transition-all duration-200 border-pink-200 shadow-sm focus:border-pink-500 focus:ring-pink-500/20 rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-md"
        />
      </div>
    );
  };

  const formatAddress = () => {
    const parts = [formState.street, formState.district, formState.province];
    return parts.filter(Boolean).join(", ");
  };

  const hasAddressData =
    formState.street || formState.district || formState.province;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="container max-w-6xl p-6 mx-auto space-y-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-4 border border-pink-200 rounded-full bg-white/80 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">
              Thông tin địa chỉ
            </span>
          </div>
          <h1 className="text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text">
            Địa Chỉ Của Bạn
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                  <Home className="w-5 h-5 text-pink-500" />
                  Thông tin địa chỉ
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Vui lòng điền đầy đủ thông tin địa chỉ
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {Object.entries(schemaProperties).map(([key, field]) =>
                  renderField(key, field)
                )}

                <Separator className="h-px bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200" />

                <div className="flex gap-3">
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    disabled={isResetting || isSaving}
                    className="flex items-center flex-1 h-12 gap-2 px-6 text-pink-700 transition-all duration-200 border-pink-200 sm:flex-none hover:bg-pink-50 hover:border-pink-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isResetting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                    {isResetting ? "Đang xóa..." : "Xóa tất cả"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            {/* Address Preview */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-900">
                  {isSaving ? (
                    <Loader2 className="w-5 h-5 text-rose-500 animate-spin" />
                  ) : (
                    <Eye className="w-5 h-5 text-rose-500" />
                  )}
                  Xem trước địa chỉ
                  {isSaving && (
                    <span className="text-sm font-normal text-gray-500">
                      (Đang lưu...)
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isResetting ? (
                  <div className="py-12 text-center">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-100 to-purple-100">
                      <Loader2 className="w-10 h-10 text-pink-500 animate-spin" />
                    </div>
                    <p className="mb-2 text-base font-medium text-gray-700">
                      Đang xóa dữ liệu...
                    </p>
                    <p className="text-sm text-gray-500">
                      Vui lòng đợi trong giây lát
                    </p>
                  </div>
                ) : hasAddressData ? (
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Badge
                        variant="secondary"
                        className="mt-0.5 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 border-0"
                      >
                        <MapPin className="w-3 h-3 mr-1" />
                        Địa chỉ
                      </Badge>
                    </div>
                    <div className="p-4 border border-pink-200 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50">
                      <p className="text-sm font-medium leading-relaxed text-gray-800">
                        {formatAddress()}
                      </p>
                    </div>

                    {/* Address components breakdown */}
                    <div className="pt-2 space-y-3">
                      {formState.province && (
                        <div className="flex items-center justify-between p-3 text-sm border border-purple-200 rounded-xl bg-purple-50">
                          <span className="font-medium text-purple-600">
                            Tỉnh/TP:
                          </span>
                          <span className="font-semibold text-purple-800">
                            {formState.province}
                          </span>
                        </div>
                      )}
                      {formState.district && (
                        <div className="flex items-center justify-between p-3 text-sm border rounded-xl bg-rose-50 border-rose-200">
                          <span className="font-medium text-rose-600">
                            Quận/Huyện:
                          </span>
                          <span className="font-semibold text-rose-800">
                            {formState.district}
                          </span>
                        </div>
                      )}
                      {formState.street && (
                        <div className="flex items-center justify-between p-3 text-sm border border-pink-200 rounded-xl bg-pink-50">
                          <span className="font-medium text-pink-600">
                            Đường/Số nhà:
                          </span>
                          <span className="font-semibold text-pink-800">
                            {formState.street}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-100 to-purple-100">
                      <MapPin className="w-10 h-10 text-pink-500" />
                    </div>
                    <p className="mb-2 text-base font-medium text-gray-700">
                      Chưa có thông tin địa chỉ
                    </p>
                    <p className="text-sm text-gray-500">
                      Vui lòng điền form bên trái
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Debug Info - Only show in development */}

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">
                  JSON Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="p-4 overflow-auto font-mono text-xs border border-gray-200 rounded-xl bg-gray-50">
                  {JSON.stringify(formState, null, 2)}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
