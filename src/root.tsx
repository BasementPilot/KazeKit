import "./global.css";
import { Button } from "./components/button/button";
import { Counter } from "./components/counter/counter";
import { Logo } from "./components/logo/logo";
import { $ } from '@builder.io/qwik';

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Logo />
        <Counter />
        <Button onClick$={onClick$}
                variant={ 'primary' }
                text="Click me!"/>
        <Button onClick$={onClick$}
                variant={ 'secondary' }
                text="Click me longer text!"/>
      </body>
    </>
  );
};

const onClick$ = $(() => console.log('Button clicked!'));