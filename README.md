# README for x-sistemo widget

This is a simple Dashboard widget to convert Esperanto text between the X-system (“sxati”) and Unicode (“ŝati”). It consists of a text area and two buttons… one converts all text to the X-system and the other converts all text to Unicode.

## How to install

From [the GitHub project page](https://github.com/bdesham/x-sistemo-widget) click on the “Downloads” button and then on the “Download .zip” button.  Unzip this file and double-click on “x-sistemo.wdgt”.  You will be prompted to install the widget, and then you can move it to wherever you want on your dashboard.

This widget should work on all Macs running OS X 10.4.3 or later.

## Usage

The widget is very dumb about the input text.  *All* instances of “cx”, “ux”, and the like will be converted to “ĉ”, “ŭ”, etc.  This might mess up, say, web addresses or French text.

The widget ignores whether the “x” is uppercase or lowercase, so that “cx” and “cX” both become “ĉ”, while “Cx” and “CX” both become “Ĉ”.

## Development

This widget was developed by [Benjamin Esham](mailto:bdesham@gmail.com) using Dashcode.  E-mail him with bug reports, feature suggestions, or patches.

## License

Copyright © 2010, Benjamin Esham.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

**The software is provided "as is", without warranty of any kind, express or
implied, including but not limited to the warranties of merchantability,
fitness for a particular purpose and noninfringement. In no event shall the
authors or copyright holders be liable for any claim, damages or other
liability, whether in an action of contract, tort or otherwise, arising from,
out of or in connection with the software or the use or other dealings in
the software.**
