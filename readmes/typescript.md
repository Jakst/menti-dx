# Speed up development with suggestions from Typescript

Flow is good type system. It has sound checks for correctness, a simple syntax, and great type inference. It has for sure helped us keep a lot bugs from going to production and improved the structure of our application. In other words, Flow has been of great help to Mentimeter.

Yet when comparing Flow to Typescript, the usage graph looks like this.

![](/ts-vs-flow.png)
Source: https://www.npmtrends.com/typescript-vs-flow-bin

Typescript has been used more widely from the beginning, and it's only accelerating. This is despite many people claiming Flow had a far superior system for type inference in the early years. Then why did it it not become more popular?

Developer Experience!

The Typescript authors have taken a different path than the authors of Flow, and focused heavily on developer experience. Especially through the integrations with VSCode. This brought over far more developers than having an elegant type system. And in the last two or three years, the differences in the type systems have evened out with both solutions giving you superb type safety.

In short, Flow is great at telling you when you're wrong, but does not do much to help you get it right. That's where Typescript shines.

To illustrate all the DX wins you get with Typescript I have prepared some exercises located in the folder `ts-demo`.


## Demos

### Import suggestions

We have big code bases with lots of files, and finding out where you need to import from can often take a lot of time. Import suggestions is one of the features I believe can speed up development the most. When writing code, this means you don't have to stop in the middle of a line to find where the component or function you want is exported from. Just let VSCode auto import it for you.

![](/imports.gif)

You can even find all missing imports with a single file in one command.

![](/multi-imports.gif)

When typescript doesn't know where a function is, you will still get auto completions on all imports to help you from struggling with relative paths.

![](/path-hints.gif)

### Object property suggestions

When you're creating an object with a predefined type, it often brings you out of context to go look up which properties the object accepts. With Typescript you get suggestions to help you along the way from the beginning, showing all possible properties, with the required ones sorted at the top.

![](/object-suggestions.gif)

Auto suggestions of course also works for the props of a react component.

![](/prop-suggestions.gif)


### Unused variables syntax highlighting

Unused variables are an annoyance that produces noise. Eslint can warn when you've got unused variables, but then you can't tell what type of warning it has. Typescript adds nuance by changing the symbol to darker color to let you know that it's not used. You can also apply a few different refactorings to the unused variable to solve the problem, like deleting it (or all unused variables), or underscoring it if it's a function signatures.

![](/unused-vars.gif)


### Refactorings: rename symbols

Renaming symbols is often hard in a larger codebase, as they may be used in many places, reexported or used through an `import as *`, making it time consuming to search for all places the symbol is used. With typescript you can use the built in refactoring to rename the symobl across the whole project instantly.

![](/refactor-rename.gif)

### Refactorings: rename file / change path

You can do the same thing with file or folder names. Just rename them in the explorer and all your imports will be updated without hassle. If it's the first time you do this VSCode might prompt you for confirmation before updating.

![](/refactor-rename-file.gif)
