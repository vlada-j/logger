# logger


[![NPM](https://nodei.co/npm/@crystallizer/logger.png?downloads=true)](https://nodei.co/npm/@crystallizer/logger/)


This is a simple logger for NodeJS. It is mostly an extension of the basic functionalities of console API. With this, you have 2 levels log with timestamp, catch some Javascript exception and all of that can be logged on screen and in files.


# Installation

```sh
npm install @crystallizer/logger
```


# Features

- Logging text in 2 levels (regular log and error log) with timestamp
- Catching uncaught exception and unhandled promises rejection
- Write that on screen or in files

## Usage

Just log anything like `console.log`

```js
logger.log("Some text", 123, [11, "22", null, true, { x:123456789 }], { a:123, b:456 })
```

Log as an error, like `console.error`

```js
logger.log('Some text', 123, [11, "22", null, true, { x:123456789 }], { a:123, b:456 })
```

Some simple title screen for you app

```js
logger.title("My App Name", "version number", "test")
```

Alse can clean screen. Is only for printing in console/screen

```js
logger.clean()
```

## Setup

Decide what you want that lib do for you and in what way. Place this in begining of your app, so logger can work in your way right away. 

```js
logger.settings({
  console: true,
  file: {
    log: "./path/to/mylogs",
    error: "./path/to/myErrors"
  },
  tracker: true
})
```

### Setup options

| Option | Default | Description |
| ------ | ------- | ----------- |
| console | true | Used native console objects for printing on screen. |
| file   | false | Enabled logged in files. Set path to logs folder (as a string) or set paths for individual folders for each log type (as a object). |
| tracker | true | Enabled catching of some Javascript exception. |

#### Author: [Vlada Janosevic](http://www.github.com/vlada-j)
