// Dependencies
import { h } from "preact";

// Style
import style from "./Loader.css";

type Props = {
  container: number;
  size?: number;
  text?: string;
};

export function Loader({
  container,
  size = 30,
  text = "Loading",
}: Props): JSX.Element {
  return (
    <div>
      <p class={style.loader__text}>{text}</p>
      <div class={style.container} style={{ height: container }}>
        <div class={style.loader} style={{ height: size, width: size }}>
          <div
            class={style.loader__interior}
            style={{ height: size / 1.5, width: size / 1.5 }}
          />
        </div>
      </div>
    </div>
  );
}
