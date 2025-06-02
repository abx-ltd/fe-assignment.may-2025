import React from "react";
import { cn } from "@/utils/helpers";
import { COMPONENT_STYLES } from "@/constants/component-styles";

/**
 * Reusable Progress Bar Component
 */
export const ProgressBar = ({
  value = 0,
  max = 100,
  className = "",
  showLabel = true,
  size = "md",
  variant = "primary",
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  const variantClasses = {
    primary: "bg-[#294172]",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("w-full bg-gray-200 rounded-full", sizeClasses[size])}>
        <div
          className={cn(
            "rounded-full transition-all duration-300",
            sizeClasses[size],
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium whitespace-nowrap">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
};

/**
 * Reusable Status Badge Component
 */
export const StatusBadge = ({
  status,
  variant = "default",
  size = "sm",
  className = "",
}) => {
  const sizeClasses = {
    xs: "px-1.5 py-0.5 text-xs",
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-[#E6F7FF] text-[#2979FF]",
    success: "bg-green-50 text-green-600",
    warning: "bg-yellow-50 text-yellow-600",
    error: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {status}
    </span>
  );
};

/**
 * Reusable Icon with Text Component
 */
export const IconText = ({
  icon: Icon,
  text,
  iconSize = "sm",
  gap = "sm",
  className = "",
  iconClassName = "",
  textClassName = "",
}) => {
  const iconSizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const gaps = {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4",
  };

  return (
    <div className={cn("flex items-center", gaps[gap], className)}>
      {Icon && <Icon className={cn(iconSizes[iconSize], iconClassName)} />}
      <span className={cn(textClassName)}>{text}</span>
    </div>
  );
};

/**
 * Reusable Card Header Component
 */
export const CardHeader = ({
  title,
  icon: Icon,
  iconSrc,
  actions,
  className = "",
}) => {
  return (
    <div className={cn(COMPONENT_STYLES.card.header, className)}>
      <div className={COMPONENT_STYLES.card.title}>
        {Icon && <Icon className="w-4 h-4 mr-2" />}
        {iconSrc && <img src={iconSrc} className="w-4 h-4 mr-2" alt="Icon" />}
        {title}
        {actions}
      </div>
    </div>
  );
};

/**
 * Reusable Empty State Component
 */
export const EmptyState = ({
  icon: Icon,
  title,
  description,
  action,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 text-center",
        className
      )}
    >
      {Icon && <Icon className="w-12 h-12 mb-4 text-gray-400" />}
      <h3 className="mb-2 text-lg font-medium text-gray-900">{title}</h3>
      {description && (
        <p className="max-w-sm mb-4 text-gray-500">{description}</p>
      )}
      {action}
    </div>
  );
};
