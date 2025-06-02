import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDebounce } from "@/hooks/useDebounce";
import { Loader2 } from "lucide-react";

const addressData = {
  "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Cầu Giấy"],
  "TP. Hồ Chí Minh": ["Quận 1", "Quận 3", "Thủ Đức"],
};

export default function VietnamAddressField({
  onStreetChange,
  onProvinceChange,
  onDistrictChange,
  formState,
  isLoading = false,
  disabled = false,
}) {
  const [localStreet, setLocalStreet] = useState(formState.street || "");
  const debouncedStreet = useDebounce(localStreet, 500);

  useEffect(() => {
    setLocalStreet(formState.street || "");
  }, [formState.street]);

  useEffect(() => {
    if (debouncedStreet !== formState.street && onStreetChange) {
      onStreetChange(debouncedStreet);
    }
  }, [debouncedStreet, formState.street, onStreetChange]);

  return (
    <div className="grid gap-4">
      {/* Province/City Selection */}
      <div className="grid gap-2">
        <Label htmlFor="province" className="flex items-center gap-2">
          Tỉnh / Thành phố
          {isLoading && (
            <Loader2 className="w-3 h-3 text-pink-500 animate-spin" />
          )}
        </Label>
        <Select
          value={formState.province || ""}
          onValueChange={onProvinceChange}
          disabled={disabled}
        >
          <SelectTrigger
            className={`w-full ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <SelectValue placeholder="Chọn Tỉnh / Thành phố" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(addressData).map((prov) => (
              <SelectItem key={prov} value={prov}>
                {prov}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* District Selection */}
      <div className="grid gap-2">
        <Label htmlFor="district">Quận / Huyện</Label>
        <Select
          value={formState.district || ""}
          onValueChange={onDistrictChange}
          disabled={!formState.province || disabled}
        >
          <SelectTrigger
            className={`w-full ${
              !formState.province || disabled
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <SelectValue
              placeholder={
                formState.province
                  ? "Chọn Quận / Huyện"
                  : "Vui lòng chọn Tỉnh / Thành phố trước"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {formState.province &&
              addressData[formState.province].map((district) => (
                <SelectItem key={district} value={district}>
                  {district}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      {/* Street Input */}
      <div className="grid gap-2">
        <Label htmlFor="street">Đường và số nhà</Label>
        <Input
          id="street"
          value={localStreet}
          onChange={(e) => setLocalStreet(e.target.value)}
          placeholder="Nhập địa chỉ chi tiết (đường, phường, số nhà...)"
          className={`w-full ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
