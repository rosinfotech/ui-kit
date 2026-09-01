import type { ReactNode } from "react";
import { CodeBlock } from "@explorer/components/CodeBlock";

interface IDemoSectionProps {
    children: ReactNode;
    code?: string;
    description?: string;
    title: string;
}

export const DemoSection = ({ children, code, description, title }: IDemoSectionProps) => (
    <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">{title}</h2>
            {description ? <p className="text-sm text-muted-fg">{description}</p> : null}
        </div>
        <div className="flex flex-wrap items-center gap-4 rounded-md border border-border p-6">
            {children}
        </div>
        {code ? <CodeBlock code={code} /> : null}
    </section>
);
