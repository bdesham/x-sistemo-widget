# x-sistemo-widget

This is a simple Dashboard widget to convert Esperanto text between the X-system (“sxati”) and Unicode (“ŝati”). It consists of a text area and two buttons… one converts all text to the X-system and the other converts all text to Unicode.

Much like Dashboard itself, **this widget is no longer being developed or supported.**

## How to install

**Getting the file:** Click the “Download ZIP” button on [the GitHub project page](https://github.com/bdesham/x-sistemo-widget). Unzip the resulting file.

**Installing the widget:** Open the “bdesham-x-sistemo-widget-…” folder and double-click on “x-sistemo.wdgt”. You will be prompted to install the widget, and then you can move it to wherever you want on your Dashboard.

This widget should work on all Macs running OS X 10.4.3 or later.

## Usage

The widget is very dumb about the input text. *All* instances of “cx”, “ux”, and the like will be converted to “ĉ”, “ŭ”, etc. This might mess up, say, web addresses or French text. The widget ignores whether the “x” is uppercase or lowercase, so that “cx” and “cX” both become “ĉ”, while “Cx” and “CX” both become “Ĉ”.

Click on the star at the top of the widget to visit x-sistemo’s GitHub project page.

## Author

This widget was created by [Benjamin Esham](https://esham.io).

This project is [hosted on GitHub](https://github.com/bdesham/x-sistemo-widget).

## Version history

* 1.1: Added a mechanism to check for updates.
* 1.0.2: Sync version number in metadata, widget, and Git.
* 1.0.1: Added an icon.
* 1.0: Initial release.

## License

This project is released into the public domain via the Unlicense, which you can find in the file LICENSE.md.
