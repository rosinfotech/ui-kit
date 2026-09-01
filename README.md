<!-- markdownlint-disable MD041 -->

[![rosinfo.tech](https://cdn.rosinfo.tech/id/logo/id_logo_width_160.svg "rosinfo.tech")](https://rosinfo.tech)

# Rosinfotech UI Kit

Rosinfotech UI Kit: TypeScript, React 19, Tailwind CSS 4, cva, полная типизация пропсов и дот-нотация вариантов (`Button.Primary`).

## Структура

```
src/              — исходники библиотеки @rosinfo.tech/ui-kit (алиас @/)
apps/explorer     — витрина компонентов (алиас @explorer/), построена на самом ките
```

## Команды

| Команда         | Действие                                            |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Dev-сервер explorer (http://localhost:33334)        |
| `npm run build` | Сборка библиотеки (dist/) и explorer (.build/)      |
| `npm run lint`  | ESLint (`lint:fix` — с автофиксом)                  |
| `npm run format`| Prettier (`format:fix` — с записью)                 |
| `npm run type-check` | tsc --noEmit во всех workspace                 |

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
