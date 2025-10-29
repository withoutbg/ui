# Contributing to @withoutbg/ui

Thank you for your interest in contributing to the WithoutBG UI component library!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/ui.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Running Storybook

```bash
npm run storybook
```

This starts Storybook at http://localhost:6006 where you can see all components and their variants.

### Building the Library

```bash
npm run build
```

This creates the production build in the `dist/` folder.

## Adding a New Component

1. **Create the component** in `src/components/YourComponent.tsx`:

```tsx
import { ReactNode } from 'react';

export interface YourComponentProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export const YourComponent = ({ children, variant = 'primary' }: YourComponentProps) => {
  const classes = variant === 'primary' ? 'bg-primary' : 'bg-secondary';
  
  return <div className={classes}>{children}</div>;
};
```

2. **Export from** `src/index.ts`:

```tsx
export { YourComponent } from './components/YourComponent';
export type { YourComponentProps } from './components/YourComponent';
```

3. **Create stories** in `src/stories/YourComponent.stories.tsx`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from '../components/YourComponent';

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Variant',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Variant',
    variant: 'secondary',
  },
};
```

4. **Test in Storybook** - verify all variants work correctly

5. **Build and verify** - run `npm run build` to ensure no errors

## Code Style Guidelines

### TypeScript

- Export all prop interfaces/types
- Use explicit return types for complex functions
- Prefer `interface` for component props
- Use `type` for unions and complex types

### React

- Use functional components
- Export named exports (not default)
- Use TypeScript for all components
- Keep components focused and single-purpose

### Styling

- Use Tailwind CSS classes
- Reference design tokens from `tailwind.preset.js`
- Support dark mode with `dark:` prefix
- Use semantic class names for complex styles

### Naming Conventions

- Components: PascalCase (`PrimaryButton.tsx`)
- Files: Match component name
- Props interfaces: `ComponentNameProps`
- Stories: `ComponentName.stories.tsx`

## Design System

Follow the WithoutBG design system defined in `tailwind.preset.js`:

### Colors

```tsx
// Primary brand colors
bg-primary              // #6C2BD9
bg-primary-hover        // #5A23B8
dark:bg-primary-light   // #A97BFF (dark mode)

// Text colors
text-primary-text       // white on primary
dark:text-primary-text-dark  // black on primary-light
```

### Typography

```tsx
// Use defined font sizes
text-xs, text-sm, text-base, text-lg, text-xl
text-2xl, text-3xl, text-4xl, text-5xl, text-6xl

// Font weights
font-light, font-normal, font-medium, font-semibold, font-bold
```

### Spacing

Follow Tailwind's default spacing scale.

## Component Requirements

Every component should:

1. ✅ Be fully typed with TypeScript
2. ✅ Export prop types
3. ✅ Support dark mode where applicable
4. ✅ Have Storybook stories
5. ✅ Include JSDoc comments for public APIs
6. ✅ Follow accessibility best practices
7. ✅ Be responsive by default

## Testing

Currently, we use Storybook for component testing. Future additions may include:
- Unit tests with Vitest
- E2E tests with Playwright
- Visual regression tests

## Pull Request Process

1. Update documentation if needed
2. Add/update Storybook stories
3. Ensure build succeeds: `npm run build`
4. Commit with clear, descriptive messages
5. Create PR with description of changes
6. Link any related issues

### Commit Message Format

```
type(scope): short description

Longer description if needed.

- Bullet points for details
- More details
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
```
feat(button): add loading state to PrimaryButton
fix(button): correct dark mode hover color
docs(readme): add installation instructions
```

## Questions?

Open an issue or discussion on GitHub!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

