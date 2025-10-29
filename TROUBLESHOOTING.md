# Troubleshooting: Missing Styles

## Problem
When importing components like `PrimaryButton` from `@withoutbg/ui` in another project, the styles don't appear.

## Root Cause
The component library uses Tailwind CSS, but the compiled CSS wasn't being generated or imported in your consuming project.

## Solution

### Step 1: Update the Library (Already Done ✅)
The library has been updated to:
- Generate a `dist/style.css` file containing all compiled Tailwind styles
- Export the styles via `@withoutbg/ui/styles`
- Include all necessary CSS for the components to work

### Step 2: Import Styles in Your Consuming Project (YOU NEED TO DO THIS)

In your project where you're using `@withoutbg/ui`, you **MUST** import the styles. Choose one of these methods:

#### Option A: Import in Your Root Layout (Recommended for Next.js App Router)

```tsx
// app/layout.tsx
import '@withoutbg/ui/styles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

#### Option B: Import in _app.tsx (Next.js Pages Router)

```tsx
// pages/_app.tsx
import '@withoutbg/ui/styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

#### Option C: Import in Your Global CSS File

```css
/* app/globals.css or styles/globals.css */
@import '@withoutbg/ui/styles';
```

### Step 3: Update Your Package

After making the changes to this library, update the package in your consuming project:

```bash
# If installed from GitHub
npm update @withoutbg/ui

# Or reinstall
npm install github:withoutbg/ui#main --force

# Or with specific commit/tag
npm install github:withoutbg/ui#commit-hash
```

### Step 4: Verify It Works

After importing the styles, your components should now display correctly with all the styling:

```tsx
import { PrimaryButton } from '@withoutbg/ui';

export default function Page() {
  return (
    <PrimaryButton onClick={() => console.log('Clicked!')}>
      Styled Button ✅
    </PrimaryButton>
  );
}
```

## What's Included in the Styles

The `style.css` file includes:
- ✅ All Tailwind base, components, and utilities
- ✅ Custom colors (primary, primary-hover, etc.)
- ✅ Custom fonts (Inter)
- ✅ Dark mode styles
- ✅ All component-specific styles

## Alternative: Using Tailwind Content Configuration

If you want more control or want to modify the styles, you can configure your project's Tailwind to process the library's components:

```javascript
// tailwind.config.js in your consuming project
const withoutbgPreset = require('@withoutbg/ui/tailwind-preset');

module.exports = {
  presets: [withoutbgPreset],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add this line to process the library's components
    './node_modules/@withoutbg/ui/dist/**/*.{js,cjs}',
  ],
  darkMode: 'class',
};
```

**Note:** Even with this configuration, you still need to import `@withoutbg/ui/styles` to get the base styles and fonts.

## Still Having Issues?

1. Check that `dist/style.css` exists in your `node_modules/@withoutbg/ui/` folder
2. Verify the import statement is at the top level of your app (before any component usage)
3. Clear your Next.js cache: `rm -rf .next && npm run dev`
4. Check browser DevTools to see if the CSS file is being loaded
5. Ensure you're using the latest version of the package

## Summary

**The fix is simple**: Just add `import '@withoutbg/ui/styles';` to your root layout or _app file! 🎉

