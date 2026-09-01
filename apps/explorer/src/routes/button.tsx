import { DemoSection } from "@explorer/components/DemoSection";
import { type IPropDef, PropsTable } from "@explorer/components/PropsTable";
import { Button } from "@rosinfo.tech/ui-kit";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, ExternalLink, Plus, Star, Trash2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/button")({
    component: ButtonPage,
});

const VARIANTS_CODE = `import { Button } from "@rosinfo.tech/ui-kit";

// Дот-нотация
<Button.Primary>Сохранить</Button.Primary>
<Button.Negative>Удалить</Button.Negative>

// Или через пропс variant
<Button variant="primary">Сохранить</Button>`;

const SIZES_CODE = `<Button.Primary size="xs">Extra Small</Button.Primary>
<Button.Primary size="sm">Small</Button.Primary>
<Button.Primary size="md">Medium</Button.Primary>
<Button.Primary size="lg">Large</Button.Primary>
<Button.Primary size="xl">Extra Large</Button.Primary>`;

const STATES_CODE = `<Button.Primary disabled>Недоступна</Button.Primary>
<Button.Primary loading>Сохранение…</Button.Primary>
<Button.Negative leftIcon={<Trash2 />}>Удалить</Button.Negative>`;

const ICONS_CODE = `<Button.Primary leftIcon={<Plus />}>Создать</Button.Primary>
<Button.Default rightIcon={<ArrowRight />}>Далее</Button.Default>

// iconOnly требует aria-label на уровне типов
<Button.Attention iconOnly aria-label="Удалить">
    <Trash2 />
</Button.Attention>`;

const SHAPE_CODE = `<Button.Primary pill>Полностью скруглённая</Button.Primary>
<Button.Primary fullWidth>На всю ширину</Button.Primary>`;

const LINK_CODE = `// href превращает кнопку в ссылку (типизация атрибутов <a>)
<Button.Primary href="https://rosinfo.tech" target="_blank" rel="noreferrer">
    Перейти на сайт
</Button.Primary>

// asChild — рендер через Radix Slot
<Button.Primary asChild>
    <a href="https://rosinfo.tech">Внешняя ссылка</a>
</Button.Primary>`;

const TOGGLE_CODE = `const [pressed, setPressed] = useState(false);

<Button
    aria-label="В избранное"
    leftIcon={<Star />}
    pressed={pressed}
    onClick={() => setPressed(!pressed)}
>
    {pressed ? "В избранном" : "В избранное"}
</Button>`;

const BUTTON_PROPS: IPropDef[] = [
    {
        defaultValue: '"default"',
        description: "Цветовое оформление кнопки.",
        name: "variant",
        type: '"default" | "primary" | "accent" | "positive" | "attention" | "negative"',
    },
    {
        defaultValue: '"md"',
        description: "Размер кнопки.",
        name: "size",
        type: '"xs" | "sm" | "md" | "lg" | "xl"',
    },
    {
        description: "Показывает спиннер, блокирует взаимодействие, ставит aria-busy.",
        name: "loading",
        type: "boolean",
    },
    {
        description: "Квадратная кнопка только с иконкой. Требует aria-label на уровне типов.",
        name: "iconOnly",
        type: "boolean",
    },
    {
        description: "Иконки слева и справа от содержимого.",
        name: "leftIcon / rightIcon",
        type: "ReactNode",
    },
    {
        description: "Полностью скруглённая форма (radius 9999px).",
        name: "pill",
        type: "boolean",
    },
    {
        description: "Растягивает кнопку на всю ширину контейнера.",
        name: "fullWidth",
        type: "boolean",
    },
    {
        description: "Нажатое состояние, ставит aria-pressed и inset-обводку.",
        name: "pressed",
        type: "boolean",
    },
    {
        description: "Превращает кнопку в <a>; типизация переключается на атрибуты ссылки.",
        name: "href",
        type: "string",
    },
    {
        description: "Рендер через Radix Slot: стили применяются к дочернему элементу.",
        name: "asChild",
        type: "boolean",
    },
    {
        description: "Реф как обычный проп (React 19).",
        name: "ref",
        type: "Ref<HTMLButtonElement | HTMLAnchorElement>",
    },
    {
        description: "Все нативные атрибуты button/a: onClick, disabled, type и другие.",
        name: "...остальные",
        type: "ButtonHTMLAttributes | AnchorHTMLAttributes",
    },
];

function LoadingDemo() {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <Button.Primary loading={isLoading} onClick={handleClick}>
            {isLoading ? "Сохранение…" : "Сохранить"}
        </Button.Primary>
    );
}

function ToggleDemo() {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Button leftIcon={<Star />} onClick={() => setIsPressed(!isPressed)} pressed={isPressed}>
            {isPressed ? "В избранном" : "В избранное"}
        </Button>
    );
}

function ButtonPage() {
    return (
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
            <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Button</h1>
                <p className="text-muted-fg">
                    Базовая кнопка: шесть цветовых вариантов, пять размеров, дот-нотация
                    (Button.Primary), полная типизация нативных атрибутов, рендер ссылкой и через
                    Radix Slot.
                </p>
            </header>

            <DemoSection
                code={VARIANTS_CODE}
                description="Дот-нотация фиксирует вариант за под-компонентом. Альтернатива — пропс variant."
                title="Варианты"
            >
                <Button.Default>Default</Button.Default>
                <Button.Primary>Primary</Button.Primary>
                <Button.Accent>Accent</Button.Accent>
                <Button.Positive>Positive</Button.Positive>
                <Button.Attention>Attention</Button.Attention>
                <Button.Negative>Negative</Button.Negative>
            </DemoSection>

            <DemoSection code={SIZES_CODE} title="Размеры">
                <Button.Primary size="xs">Extra Small</Button.Primary>
                <Button.Primary size="sm">Small</Button.Primary>
                <Button.Primary size="md">Medium</Button.Primary>
                <Button.Primary size="lg">Large</Button.Primary>
                <Button.Primary size="xl">Extra Large</Button.Primary>
            </DemoSection>

            <DemoSection
                code={STATES_CODE}
                description="Кликни первую кнопку — реальный пример loading-состояния."
                title="Состояния"
            >
                <LoadingDemo />
                <Button.Primary disabled>Недоступна</Button.Primary>
                <Button.Negative leftIcon={<Trash2 />}>Удалить</Button.Negative>
            </DemoSection>

            <DemoSection
                code={ICONS_CODE}
                description="Иконки — любой ReactNode. Для iconOnly типы требуют aria-label."
                title="Иконки"
            >
                <Button.Primary leftIcon={<Plus />}>Создать</Button.Primary>
                <Button.Default rightIcon={<ArrowRight />}>Далее</Button.Default>
                <Button.Attention aria-label="Удалить" iconOnly>
                    <Trash2 />
                </Button.Attention>
                <Button.Negative aria-label="Скачать" iconOnly>
                    <Download />
                </Button.Negative>
            </DemoSection>

            <DemoSection code={SHAPE_CODE} title="Форма и ширина">
                <div className="flex w-full flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <Button.Primary pill>Полностью скруглённая</Button.Primary>
                        <Button.Primary leftIcon={<Plus />} pill size="sm">
                            Маленькая pill
                        </Button.Primary>
                    </div>
                    <Button.Primary fullWidth>На всю ширину</Button.Primary>
                </div>
            </DemoSection>

            <DemoSection
                code={LINK_CODE}
                description="С href кнопка рендерится как <a> с типизацией её атрибутов."
                title="Кнопка-ссылка"
            >
                <Button.Primary
                    href="https://rosinfo.tech"
                    rel="noreferrer"
                    rightIcon={<ExternalLink />}
                    target="_blank"
                >
                    Перейти на сайт
                </Button.Primary>
                <Button.Primary asChild>
                    <a href="https://rosinfo.tech" rel="noreferrer" target="_blank">
                        Через asChild
                    </a>
                </Button.Primary>
            </DemoSection>

            <DemoSection
                code={TOGGLE_CODE}
                description="pressed — визуальное «залипание» + aria-pressed для доступности."
                title="Нажатое состояние (toggle)"
            >
                <ToggleDemo />
            </DemoSection>

            <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">Пропсы</h2>
                <PropsTable propsDefs={BUTTON_PROPS} />
            </section>
        </div>
    );
}
