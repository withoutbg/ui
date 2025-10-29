# Quick Start Guide

This guide will help you get started with developing and using the `@withoutbg/ui` component library.

## For Developers (Contributing)

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Setup Development Environment

1. Clone the repository:
```bash
git clone https://github.com/withoutbg/ui.git
cd ui
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook:
```bash
npm run storybook
```
This will start Storybook at http://localhost:6006

4. Build the library:
```bash
npm run build
```

### Project Structure
```
withoutbg-ui/
├── src/
│   ├── components/        # React components
│   │   └── PrimaryButton.tsx
│   ├── stories/          # Storybook stories
│   │   └── PrimaryButton.stories.tsx
│   ├── styles/           # Global styles
│   │   └── globals.css
│   └── index.ts          # Main export file
├── .storybook/           # Storybook configuration
├── dist/                 # Build output (gitignored)
├── tailwind.preset.js    # Tailwind design system
└── vite.config.ts        # Vite build config
```

## For Consumers (Using the Library)

### Installation

Add to your project via GitHub:

```bash
npm install github:withoutbg/ui#main
```

### Configuration

1. **Extend Tailwind Config** (`tailwind.config.js`):
```javascript
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

2. **Import Styles** (in your main file or layout):
```tsx
import '@withoutbg/ui/styles';
```

### Basic Usage

```tsx
import { PrimaryButton } from '@withoutbg/ui';

function App() {
  return (
    <div>
      {/* As a button */}
      <PrimaryButton onClick={() => alert('Clicked!')}>
        Click Me
      </PrimaryButton>

      {/* As a link (Next.js) */}
      <PrimaryButton href="/about">
        Go to About
      </PrimaryButton>

      {/* With disabled state */}
      <PrimaryButton onClick={() => {}} disabled>
        Disabled
      </PrimaryButton>
    </div>
  );
}
```

## Adding New Components

1. Create component in `src/components/YourComponent.tsx`
2. Export from `src/index.ts`
3. Create stories in `src/stories/YourComponent.stories.tsx`
4. Test in Storybook
5. Build and commit

## Publishing Updates

Since this package is installed via GitHub:

1. Make your changes
2. Build: `npm run build`
3. Commit: `git commit -m "Your changes"`
4. Tag version (optional): `git tag v0.2.0`
5. Push: `git push origin main --tags`

Consumers can update by running:
```bash
npm update @withoutbg/ui
```

Or install a specific version:
```bash
npm install github:withoutbg/ui#v0.2.0
```

## Troubleshooting

### Tailwind styles not applying
- Ensure the preset is loaded in your tailwind.config
- Check that the content paths include the package
- Verify styles are imported in your main file

### Next.js Link errors
- Ensure `next` is installed in your project
- Check that you're using Next.js 14+

### Dark mode not working
- Add `darkMode: 'class'` to your Tailwind config
- Toggle the `dark` class on your root element

## Resources

- [Storybook Documentation](https://storybook.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Next.js](https://nextjs.org/)

