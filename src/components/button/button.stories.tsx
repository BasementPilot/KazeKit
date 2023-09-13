import type { StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './button';
import { $ } from '@builder.io/qwik';
import { LuRocket } from '@qwikest/icons/lucide';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick$: {
      defaultValue: '',
      description: 'The function called on click.',
    },
    text: {
      defaultValue: 'Click me!',
      control: 'text',
      description: 'The text of the button.',
    },
    variant: {
      defaultValue: 'primary',
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      description: 'The variation of the button.',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

const onClick$ = $(() => console.log('Button clicked!'));

export const Default: Story = {
  args: {
    onClick$: onClick$,
    text: 'Primary',
    variant: 'primary',
  } as ButtonProps,
};

export const Primary = {
  name: 'Primary',
  render: () => <Button onClick$={onClick$} text="Primary" variant="primary" />,
};

export const ButtonWithIcon = {
  name: 'Button With Icon',
  render: () => (
    <Button onClick$={onClick$} text="Primary" variant="primary">
      <div q:slot="icon" style={{ color: 'white', fontSize: '24px' }}>
        <LuRocket />
      </div>
    </Button>
  ),
};

export const Secondary = {
  name: 'Secondary',
  render: () => <Button onClick$={onClick$} text="Secondary" variant="secondary" />,
};

export const Success = {
  name: 'Success',
  render: () => <Button onClick$={onClick$} text="Success" variant="success" />,
};

export const Danger = {
  name: 'Danger',
  render: () => <Button onClick$={onClick$} text="Danger" variant="danger" />,
};

export const Warning = {
  name: 'Warning',
  render: () => <Button onClick$={onClick$} text="Warning" variant="warning" />,
};
