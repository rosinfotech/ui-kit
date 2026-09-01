import { Button } from "@rosinfo.tech/ui-kit";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface ICodeBlockProps {
    code: string;
}

export const CodeBlock = ({ code }: ICodeBlockProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyCode = async () => {
        await navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
    };

    return (
        <div className="relative">
            <Button
                aria-label="Копировать код"
                className="absolute right-2 top-2"
                iconOnly
                onClick={copyCode}
                size="xs"
                variant="default"
            >
                {isCopied ? <Check /> : <Copy />}
            </Button>
            <pre className="overflow-x-auto rounded-md border border-border bg-muted p-4 pe-12 text-sm">
                <code>{code}</code>
            </pre>
        </div>
    );
};
