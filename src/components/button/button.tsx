import { component$, PropFunction, Slot } from '@builder.io/qwik';
import styles from './button.module.css';

export type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export interface ButtonProps {
  onClick$: PropFunction<() => void>;
  text?: string;
  variant: ButtonVariants;
}

export const Button = component$((props: ButtonProps) => {
  return (
    <button
      type="button"
      onClick$={props.onClick$}
      class={[
        styles.button,
        props.variant === 'primary' ? styles.primary : {},
        props.variant === 'secondary' ? styles.secondary : {},
        props.variant === 'success' ? styles.success : {},
        props.variant === 'danger' ? styles.danger : {},
        props.variant === 'warning' ? styles.warning : {},
      ]}
    >
      <div class={[styles.inner]}>
        <Slot name="icon" />
        <span>{props.text}</span>
      </div>
    </button>
  );
});
