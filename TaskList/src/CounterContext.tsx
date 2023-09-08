import { createContext } from "react";

type CounterContext = {
    counter: number,
    setCounter?: (counter: number) => void;
}

const CounterContext = createContext<CounterContext>({ counter: 9 });

export default CounterContext;
