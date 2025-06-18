import { useRemirror } from "@remirror/react";
import {
  BoldExtension,
  BulletListExtension,
  ItalicExtension,
} from "remirror/extensions";
import { Remirror, EditorComponent } from "@remirror/react";
import "remirror/styles/all.css";

export const CustomEditor = () => {
  const { manager } = useRemirror({
    extensions: () => [
      new BulletListExtension({}),
      new BoldExtension({}),
      new ItalicExtension(),
    ],
  });

  console.log("rendered");

  return (
    <>
      <div
        style={{ width: "100%", maxWidth: "500px", border: "2px solid black" }}
      >
        <Remirror
          classNames={["!h-96 border-black/40 border-2 !w-96"]}
          manager={manager}
        >
          <EditorComponent />
        </Remirror>
      </div>
    </>
  );
};
