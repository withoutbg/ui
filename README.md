# @withoutbg/ui

A reusable React component library for WithoutBG projects, built with Tailwind CSS and Next.js support.

## Features

- 🎨 Pre-configured Tailwind CSS design system
- ⚡ Built with Vite for optimal performance
- 📚 Storybook documentation
- 🌙 Dark mode support out of the box
- 🔗 Next.js Link integration
- 📦 TypeScript support
- 🎯 Tree-shakeable exports

## Installation

Install directly from GitHub:

```bash
npm install github:withoutbg/ui#main
# or
yarn add github:withoutbg/ui#main
# or
pnpm add github:withoutbg/ui#main
```

## Setup

### 1. Configure Tailwind CSS

Extend your Tailwind configuration with the WithoutBG preset:

```javascript
// tailwind.config.js
const withoutbgPreset = require('@withoutbg/ui/tailwind-preset');

module.exports = {
  presets: [withoutbgPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@withoutbg/ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
};
```

### 2. Import Styles

Import the component styles in your main CSS file or layout:

```css
/* In your global CSS file */
@import '@withoutbg/ui/styles';
```

Or import in your root layout/app component:

```tsx
import '@withoutbg/ui/styles';
```

## Usage

### PrimaryButton

A versatile button component that supports both click handlers and Next.js navigation.

#### As a Button

```tsx
import { PrimaryButton } from '@withoutbg/ui';

function MyComponent() {
  return (
    <PrimaryButton onClick={() => console.log('Clicked!')}>
      Click Me
    </PrimaryButton>
  );
}
```

#### As a Link

```tsx
import { PrimaryButton } from '@withoutbg/ui';

function MyComponent() {
  return (
    <PrimaryButton href="/about">
      Go to About
    </PrimaryButton>
  );
}
```

#### With Disabled State

```tsx
import { PrimaryButton } from '@withoutbg/ui';

function MyComponent() {
  return (
    <PrimaryButton onClick={() => {}} disabled>
      Disabled Button
    </PrimaryButton>
  );
}
```

#### With Custom Styling

```tsx
import { PrimaryButton } from '@withoutbg/ui';

function MyComponent() {
  return (
    <PrimaryButton 
      onClick={() => {}}
      className="px-8 py-4 text-lg"
    >
      Large Button
    </PrimaryButton>
  );
}
```

## Design System

The package includes the WithoutBG design system with:

### Colors

- **Primary**: `#6C2BD9` (hover: `#5A23B8`)
- **Primary Light** (Dark mode): `#A97BFF` (hover: `#9460E8`)
- **Backgrounds**: Light (`#f7f7f7`), Dark (`#2b3035`)

### Typography

- **Font Family**: Inter, SF Pro Display, system fonts
- **Font Sizes**: xs (12px) through 6xl (60px)
- **Font Weights**: 300-700

### Animations

- Shimmer effect
- Fade-in-up
- Smooth transitions

## Development

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/withoutbg/ui.git
cd ui

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build
```

### Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build the library for production
- `npm run storybook` - Start Storybook on port 6006
- `npm run build-storybook` - Build Storybook for deployment

## Storybook

View component documentation and examples:

```bash
npm run storybook
```

This will start Storybook at `http://localhost:6006`

## TypeScript

The package includes full TypeScript support with generated type definitions.

## Peer Dependencies

- `react` >= 18.0.0
- `react-dom` >= 18.0.0
- `next` >= 14.0.0
- `tailwindcss` >= 3.0.0

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on GitHub.

