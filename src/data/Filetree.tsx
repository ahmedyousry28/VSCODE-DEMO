import { Ifile } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export const Filetree: Ifile = {
  id: uuidv4(),
  name: "VSCodeDemo",
  isFolder: true,
  children: [
    {
      id: uuidv4(),

      name: "git",
      isFolder: true,
    },
    {
      id: uuidv4(),

      name: ".vite",
      isFolder: true,
      children: [
        {
          id: uuidv4(),

          name: "file.jsconfig",
          isFolder: false,
          content: `{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
`,
        },
        {
          id: uuidv4(),

          name: "file.html",
          isFolder: false,
          content: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MINI VS CODE</title>
  </head>
  <body>
      
  </body>
  </html>
          `,
        },
        {
          id: uuidv4(),

          name: "alert.tsx",
          isFolder: false,
          content: `import React from "react";

const Alert = ({ message, type }) => {
  return (
    <div className={alert alert-{type}}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;`,
        },
        {
          id: uuidv4(),

          name: "button.jsx",
          isFolder: false,
          content: `import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;`,
        },
      ],
    },
    {
      id: uuidv4(),

      name: "public.css",
      isFolder: false,
      content: `:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}
`,
    },
    {
      id: uuidv4(),

      name: "android",
      isFolder: true,
      children: [
        {
          id: uuidv4(),

          name: "text.txt",
          isFolder: false,
          content: `  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
  tortor sit amet ultricies consequat, orci nulla congue odio.
  at dapibus sem ex nec orci. Maecenas libero libero, feugiat nec efficitur vel.
`,
        },
      ],
    },
    {
      id: uuidv4(),

      name: "webpack",
      isFolder: true,
    },
    {
      id: uuidv4(),

      name: "default",
      isFolder: true,
    },
  ],
};
