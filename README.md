# Glow Cards

A reusable and customizable glow card effect component built with **shadcn**, **Tailwind CSS**, and **React**. This component allows you to create stunning glowing cards by wrapping your content in a `GlowArea` and `Glow` component.

## Features

- **Reusable Components**: Use `GlowArea` and `Glow` to create glowing cards effortlessly.
- **Customizable Glow Effect**: Adjust the glow color, size, and position dynamically.
- **Built with Tailwind CSS**: Leverage the power of utility-first CSS for rapid development.
- **Powered by shadcn**: Use shadcn's pre-built components for consistent and accessible UI.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/callmedeci/Glow-Card-Effect.git
   ```

2. Navigate to the project directory:
   ```bash
   cd glow-cards
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the project.

## Usage

### 1. Import the Components

```jsx
import { GlowArea, Glow } from './components/Glow';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from './components/ui/card';
import { Button } from './components/ui/button';
```

### 2. Wrap Your Content in `GlowArea` and `Glow`

```jsx
<GlowArea className="flex gap-5">
  <Glow color="var(--color-rose-800)" className="rounded-xl">
    <Card className="max-w-lg">
      // other components
    </Card>
  </Glow>
</GlowArea>
```
## Props

### `GlowArea`

The `GlowArea` component is the container for all `Glow` components. It ensures the glow effects are properly positioned and animated.

```jsx
GlowArea({ className, size = 300, children, ...props })
```

| Prop        | Type            | Default       | Description                          |
|-------------|-----------------|---------------|--------------------------------------|
| `className` | `string`        | `""`          | Additional Tailwind CSS classes.     |
| `size`      | `number`        | `300`         | The size of the glow area in pixels. |
| `children`  | `ReactNode`     | `null`        | The child elements to render.        |
| `...props`  | `HTMLAttributes`| `{}`          | Additional HTML attributes.          |

---

### `Glow`

The `Glow` component wraps your content and applies the glow effect.

```jsx
Glow({ color, className, children, ...props })
```

| Prop        | Type            | Default       | Description                          |
|-------------|-----------------|---------------|--------------------------------------|
| `color`     | `string`        | `#ffffff`     | The color of the glow effect.        |
| `className` | `string`        | `""`          | Additional Tailwind CSS classes.     |
| `children`  | `ReactNode`     | `null`        | The child elements to render.        |
| `...props`  | `HTMLAttributes`| `{}`          | Additional HTML attributes.          |

---

## Dependencies

This project uses the following libraries:

- **[shadcn](https://ui.shadcn.com/)**: For pre-built, accessible UI components.
- **[Tailwind CSS](https://tailwindcss.com/)**: For utility-first CSS styling.
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)**: For smooth animations.
- **[Lucide React](https://lucide.dev/)**: For beautiful icons.
- **[Radix UI](https://www.radix-ui.com/)**: For primitives like `Slot`.

## Acknowledgments

- [shadcn](https://ui.shadcn.com/) for providing an amazing UI component library.
- [Tailwind CSS](https://tailwindcss.com/) for making styling a breeze.
- [Vite](https://vitejs.dev/) for the fast development experience.

---
Enjoy using the Glow Cards component!

