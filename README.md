<!-- markdownlint-disable MD041 -->

[![rosinfo.tech](https://cdn.rosinfo.tech/id/logo/id_logo_width_160.svg "rosinfo.tech")](https://rosinfo.tech)

# Rosinfotech UI Kit

Rosinfotech UI Kit: TypeScript, React 19, Tailwind CSS 4, cva, полная типизация пропсов и дот-нотация вариантов (`Button.Primary`).

## Структура

```
src/              — исходники библиотеки @rosinfo.tech/ui-kit (алиас @/)
apps/explorer     — витрина компонентов (алиас @explorer/), построена на самом ките
apps/dna          — документация основ дизайн-системы (статический HTML, src/)
```

## Команды

| Команда         | Действие                                            |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Dev-сервер explorer (http://localhost:33334)        |
| `npm run dna`   | Dev-сервер DNA-документации (http://localhost:33335)|
| `npm run build` | Сборка библиотеки (dist/) и explorer (.build/)      |
| `npm run lint`  | ESLint (`lint:fix` — с автофиксом)                  |
| `npm run format`| Prettier (`format:fix` — с записью)                 |
| `npm run type-check` | tsc --noEmit во всех workspace                 |

## Документация DNA

`apps/dna` — описание ядра дизайн-системы (её «ДНК»): не реализация кита, а спецификация-основа, по которой дизайн-система строится и проверяется в Figma. Разделы:

- Семантика (SEM) — реестр трёхбуквенных кодов и грамматики имён;
- Абсолютная цветовая палитра (CLR) — 442 токена, 13 семейств;
- Функциональная цветовая палитра (FCL) — пространственная модель ABV/SFC/BLW, полная таблица ролей;
- Отступы (SPC), скругления (RAD), толщины (THK) — шкалы значений;
- Типографика (TXT) — матрица Roboto Flex × 7 кеглей; функциональная типографика (FTY) — роли и вертикальный ритм;
- Градиенты высоты (GRD).

Страницы набраны ролями FTY с флюидным rem-масштабом.

## Пакет @rosinfo.tech/ui-kit

```json
{
    "dependencies": { "@rosinfo.tech/ui-kit": "*" }
}
```

```tsx
import { Button } from "@rosinfo.tech/ui-kit";
import "@rosinfo.tech/ui-kit/styles.css";

<Button.Primary leftIcon={<Plus />}>Создать</Button.Primary>
```

- Токены: CSS-переменные `--ui-*`, темы через класс `.ui-dark` на `<html>`
- Сборка: Vite Library Mode, ESM + CJS + d.ts, стили — отдельный `dist/styles.css`
