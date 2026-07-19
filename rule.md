# Code Style and Architecture Rules

This project adheres to styling and structural rules designed to keep the codebase simple, understandable, human-like, and highly maintainable.

---

## 1. Human-Like Code Style
*   **Write for humans, not compilers**: Prioritize clarity, readability, and clean layouts over micro-optimizations or clever, terse code patterns.
*   **Keep abstractions grounded**: Do not introduce custom abstractions, wrapper classes, or generic interfaces unless they are reused multiple times across the project. 
*   **Simple naming**: Use straightforward, descriptive, and natural English names for files, functions, variables, and components.
*   **Standard layouts**: Stick to traditional React hooks, basic TypeScript interfaces, and normal vanilla CSS. Avoid complex nested ternary chains.

---

## 2. Human-Made Folder & File Structure (Flat)
*   **Flat files under src**: All components, contexts, routing files, stylesheets, and datasets must live flat directly in the `src/` directory.
*   **No subfolders**: Avoid collapsing files into subdirectories (like `pages/`, `components/`, `context/`, `data/`) for small projects. This eliminates import depth complexity (`../../components/etc`) and allows you to view all source files at a single glance.
*   **Cohesive files**: Keep components and their related local helper utilities in the same file rather than fragmenting them into dozens of micro-imports.

---

## 3. Simplicity Over Complexity
*   **Native over external**: Use native browser and React APIs (like standard `fetch`, standard browser local storage, and inline SVGs) before installing heavy external libraries.
*   **Short, focused functions**: Write functions that do one thing well. Keep them under 40-50 lines where possible.
*   **Early returns**: Write early return statements to handle errors or edge-cases, keeping the main path of your function clean.
*   **Explicit logic**: Write explicit `if/else` statements rather than complex chained boolean expressions or nested logical operators.

---

## 4. Easy to Debug (Developer Friendly)
*   **Transparent state**: Keep state updates clear, predictable, and unidirectional. Do not synchronize multiple redundant states.
*   **Predictable Error Handling**: Catch errors explicitly, log them with clear context, and present human-readable descriptions to the user.
*   **Clean CSS**: Avoid obscure hacks. Write clean, descriptive class names, use standard flexbox/grid layouts, and use custom properties (`--color-bg`, `--font-sans`) for design variables.
*   **Helpful comments**: Document the *why*, not the *what*. If a piece of logic is naturally complex, write a brief, friendly comment explaining the business reasoning.

---

## 5. Working Rules — Front-End Assessment
*   **AI Mode**: The assessment permits AI tools. The signed declaration is that I understand my submission and can explain, debug, and extend it in a live technical discussion.
    *   I write the code. Claude/AI explains, reviews, and pushes back.
    *   When I'm stuck, Claude/AI explains the *approach* and lets me implement it. Finished code is a last resort, and if it happens I rewrite it myself after.
    *   Nothing enters the repo that I can't explain line by line.
*   **Increments**:
    *   One feature at a time. The app runs and works at the end of every step.
    *   Commit after each working increment, with a message I wrote.
    *   No large multi-file drops. If a step is too big to explain in two minutes, it's too big.
*   **Explain-Back Checkpoints**: After each increment, before moving on, I state out loud:
    *   What this code does and why it's structured this way.
    *   What alternative I rejected, and why.
    *   What breaks if the data is empty, null, or slow to arrive.
    *   If I can't do this, we stop and fix the gap immediately — not later.
*   **Defensible Code**: Every one of these is a likely interview question. If any is true of my code and I can't justify it, it doesn't ship:
    *   Why this state lives here and not higher or lower in the tree.
    *   Why `useEffect` has these dependencies, and what happens on re-run.
    *   Why this is derived state vs. stored state.
    *   Why this component was split out (or wasn't).
    *   What happens on: empty list, failed request, slow request, rapid clicks, invalid input.
*   **Style**:
    *   My naming, my formatting, my file layout — consistent because I chose it, not because a generator was consistent.
    *   Comments only where the *why* isn't obvious from the code.
    *   No abstractions I wouldn't have reached for on my own. No patterns I can't name and explain the purpose of.
    *   No libraries I haven't used before unless I can justify the dependency.
*   **Before Submitting**:
    *   Mock interview: Claude/AI plays the evaluator. Explain the architecture, make a live modification, debug an introduced bug, add a small feature under time.
    *   Any question I fumble becomes a study item, not a shrug.
