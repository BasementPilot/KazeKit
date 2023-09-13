import { component$, PropFunction } from "@builder.io/qwik";
import styles from './button.module.css';

export type ButtonVariants = 'primary' | 'secondary';

export interface ButtonProps {
  onClick$: PropFunction<() => void>;
  text: string;
  variant: ButtonVariants;
}

export const Button = component$((props: ButtonProps) => {
  return (
    <button 
      type="button"
      onClick$={ props.onClick$ }
      class={[
        styles.button,
        props.variant === 'primary' ? styles.primary : {},
        props.variant === 'secondary' ? styles.secondary : {}
      ]}>
        { props.text }
    </button>
  );
});
