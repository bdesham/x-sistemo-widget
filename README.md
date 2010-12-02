# README for x-sistemo widget

This is a simple Dashboard widget to convert Esperanto text between the X-system (e.g. “sxati”) and Unicode (e.g. “ŝati”). It consists of a text area and two buttons… one converts all text to the X-system and the other converts all text to Unicode.

## How to install

...

## Notes

* The widget is very dumb about the input text.  *All* instances of “cx”, “ux”, and the like will be converted to “ĉ”, “ŭ”, etc.  This might mess up, say, web addresses or French text.
* The widget ignores whether the “x” is uppercase or lowercase, so that “cx” and “cX” both become “ĉ”, while “Cx” and “CX” both become “Ĉ”.
