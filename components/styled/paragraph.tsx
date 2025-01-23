import { cn } from "@/lib/utils"; 

export function Paragraph({
  children,
  className,
  ...restProps
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "text-blue-950 text-justify leading-7 [&:not(:first-child)]:mt-3",
        className
      )}
      {...restProps}
    >
      {children}
    </p>
  );
}
