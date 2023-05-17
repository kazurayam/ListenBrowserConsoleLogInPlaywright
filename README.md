# Listening Console log of browser in Playwright

I made a Playwright project to demonstrate how my Typescript code can listen the Console log of browser.

## Preparation

### Prerequisites

- macOS v12.6
- Visual Studio Code Version: 1.78.2 + [Playwright plugin](https://playwright.dev/docs/getting-started-vscode)

### Install

On Mac, we need Homebrew. Follow the instruction in the home page.

- [Homebrew / Install Homebrew](https://brew.sh/)

Need to install Node. NPM (Node Package Manager) will be installed together.

```
$ brew instal node
```

Need to install Playwright.

```
$ npm init playwright@latest
```

In the project directory, a set of sample test scripts will be generated . You can execute tests by the following command:

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

Near to my test function、a link labeled with a text `▷ Execute Playwright Test` is displayed. I clicked it. Then the test was executed.

![executed](https://kazurayam.github.io/ListenBrowserConsoleLogInPlaywright/images/Execute%20Playwright%20Test.png)

In the Terminal, I could see a `npx playwright test xxxx` command was echoed and executed. The command showed a text `2023/5/17 11:42:36`.

The text was originally written by a Javascript on the target web page into the javascript console. Playwright transferred the text into my Typescript. My Typescript had a line:

```
  // Listen for all console logs
  page.on('console', msg => console.log(msg.text()))
```

So the message was displayed in the Terminal window on VSCode on my mac.

That's all I've done.

