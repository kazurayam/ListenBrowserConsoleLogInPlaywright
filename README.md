# Listening to Console log of Chrome browser in Playwright

## Preparation

### Prerequisites

- macOS v12.6
- Visual Studio Code Version: 1.78.2 + [Playwright plugin](https://playwright.dev/docs/getting-started-vscode)

### Install

On Mac, we need Homebrew. Follow the instruction in the home page.

- [Homebrew / Install Homebrew]

Need to install Node. NPM (Node Package Manager) will be installed together.

```
$ brew instal node
```

Need to install Playwright.

```
$ npm init playwright@latest
```

In the project directory, a file `Tests-examples/demo-todo-app.spec.ts` will be created. You can execute by the following command:

```
$ npx playwright test
```

You can see the report by

```
$ npx playwright show-report
```

You can execute test in VSCode

https://playwright.dev/docs/getting-started-vscode


## My demo

I wrote a Typescript script which uses Playwright API.

- [tests/listen-to-console.spec.ts](https://github.com/kazurayam/ListenBrowserConsoleLogInPlaywright/blob/master/tests/listen-to-console.spec.ts)

In VSCode, I opened it with text editor.

Near to m ytest function、a link labled with a text `▷ Execute Playwright Test` is displayed. I clicked it. Then the test was executed.

![executed](https://kazurayam.github.io/ListenBrowserConsoleLogInPlaywright/images/Execute%20Playwright%20Test.png)

In the Terminal, a `npx playwright test xxxx` command was echoed, and executed. The command showed a text `2023/5/17 11:42:36`, which was originally written by a Javascript on the target web page into the javascript console. Playwrite transfered the text into my Typescript. My Typescript had a line:

```
  // Listen for all console logs
  page.on('console', msg => console.log(msg.text()))
```

So the message was displayed in the Terminal window on VSCode.

That's all I've done.

