# PDFTron

Because pdf.js + Electron = ❤

PDFTron is a simple and lightweight PDF reader which is simply [Mozilla's pdf.js](https://github.com/mozilla/pdf.js) embedded in an Electron window. See it as a standalone desktop version of pdf.js.

## Getting started

### Environment

- NodeJS v6.10.x (or above)

### Quickstart

You can use a pre-built version of PDFTron available [here](https://github.com/Sudiukil/PDFTron/releases).

If you want, you can also run it from source :

1. `git clone https://github.com/Sudiukil/PDFTron && cd PDFTron`
2. `npm install`
3. `npm start <file.pdf>`

Or build it yourself (resume from step previous step 2) by running `./build.sh <platform>`, with *platform* being linux, win32, darwin or all.

## License

See [LICENSE](https://github.com/Sudiukil/PDFTron/blob/master/LICENSE)

For pdf.js license see: [LICENSE](https://github.com/mozilla/pdf.js/blob/master/LICENSE)

## Why ?

I simply needed to change my PDF reader and I really like pdf.js, but I want my PDF reader to be a desktop-like app, not some webapp in my web browser.

And yes, I am aware that there are some other pdf.js + Electron apps somewhere on the web, but I wanted to try out Electron for a while, so...
