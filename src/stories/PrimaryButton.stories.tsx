import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from '../components/PrimaryButton';

const meta = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile primary button component that supports both link navigation (Next.js Link) and click handlers. Features dark mode support and disabled states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button (only for click variant)',
    },
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Button with onClick handler
export const ClickButton: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
};

// Link button
export const LinkButton: Story = {
  args: {
    children: 'Navigate',
    href: '/',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button that navigates to a URL using Next.js Link component.',
      },
    },
  },
};

// Disabled button
export const DisabledButton: Story = {
  args: {
    children: 'Disabled',
    onClick: () => alert('This should not fire'),
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button in disabled state. Note that disabled state is only available for click buttons, not links.',
      },
    },
  },
};

// Long text button
export const LongText: Story = {
  args: {
    children: 'This is a button with longer text content',
    onClick: () => {},
  },
};

// Custom className
export const CustomStyling: Story = {
  args: {
    children: 'Custom Styled',
    onClick: () => {},
    className: 'px-8 py-4 text-lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with custom className to override default padding and text size.',
      },
    },
  },
};

// Group of buttons
export const ButtonGroup: Story = {
  args: {
    children: 'Default',
    onClick: () => {},
  },
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <PrimaryButton onClick={() => {}}>Button 1</PrimaryButton>
      <PrimaryButton onClick={() => {}}>Button 2</PrimaryButton>
      <PrimaryButton onClick={() => {}}>Button 3</PrimaryButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple buttons displayed together.',
      },
    },
  },
};

// Dark mode example
export const DarkMode: Story = {
  args: {
    children: 'Dark Mode Button',
    onClick: () => {},
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Button appearance in dark mode. Toggle the theme in the toolbar to see the difference.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

// All states showcase
export const AllStates: Story = {
  args: {
    children: 'Default',
    onClick: () => {},
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Light Mode</h3>
        <div className="flex gap-4 flex-wrap">
          <PrimaryButton onClick={() => {}}>Normal</PrimaryButton>
          <PrimaryButton onClick={() => {}} disabled>Disabled</PrimaryButton>
          <PrimaryButton href="/">Link Button</PrimaryButton>
        </div>
      </div>
      <div className="dark">
        <h3 className="text-sm font-semibold mb-3 text-gray-300">Dark Mode</h3>
        <div className="flex gap-4 flex-wrap">
          <PrimaryButton onClick={() => {}}>Normal</PrimaryButton>
          <PrimaryButton onClick={() => {}} disabled>Disabled</PrimaryButton>
          <PrimaryButton href="/">Link Button</PrimaryButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all button states in both light and dark modes.',
      },
    },
  },
};

