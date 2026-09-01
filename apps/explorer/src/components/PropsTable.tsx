export interface IPropDef {
    defaultValue?: string;
    description: string;
    name: string;
    type: string;
}

interface IPropsTableProps {
    propsDefs: IPropDef[];
}

export const PropsTable = ({ propsDefs }: IPropsTableProps) => (
    <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full border-collapse text-left text-sm">
            <thead>
                <tr className="border-b border-border bg-muted">
                    <th className="px-3 py-2 font-semibold">Пропс</th>
                    <th className="px-3 py-2 font-semibold">Тип</th>
                    <th className="px-3 py-2 font-semibold">По умолчанию</th>
                    <th className="px-3 py-2 font-semibold">Описание</th>
                </tr>
            </thead>
            <tbody>
                {propsDefs.map(propDef => (
                    <tr className="border-b border-border last:border-b-0" key={propDef.name}>
                        <td className="px-3 py-2 font-mono text-xs whitespace-nowrap">
                            {propDef.name}
                        </td>
                        <td className="px-3 py-2 font-mono text-xs text-muted-fg">
                            {propDef.type}
                        </td>
                        <td className="px-3 py-2 font-mono text-xs text-muted-fg">
                            {propDef.defaultValue ?? "—"}
                        </td>
                        <td className="px-3 py-2 text-muted-fg">{propDef.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
