import { cn } from "@/lib/utils";

export default function ProductPrice({ value, className }: { value: number; className?: string }) {
    const stringValue = value.toFixed(2);
    const [intValue, floatValue] = stringValue.split(".");

    return (
        <p className={cn("txt-2xl", className)}>
            <span className={"text-xs align-super"}>$</span>
            <span className={"text-xs align-super"}>{floatValue}</span>
        </p>
    );
}