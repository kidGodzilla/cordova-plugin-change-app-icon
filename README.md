Change App Icon - Cordvoa Plugin
==================

*Work in progress*

As of iOS 10.3 Apple introduced the ability to Change an Apps Icon from within the app (See NFL app for example)
This plugin enables this ability via cordova


You must specify the icons name and path as a preference when installing the plugin, currently it supports up to 5 alternate icons icons using the variables AlternateAppIcon1Name & AlternateAppIcon1Path (substituting 1-5).

To add this plugin just type

    cordova plugin add cordova-plugin-change-app-icon --variable AlternateAppIcon1Name="IconName" --variable AlternateAppIcon1Path="IconPath"

To set an alternate icon provide the name set when installing the plugin

    changeAppIcon.changeAppIcon(successCallbackFunction, errorCallbackFunction, alternateIconName);

To restore original icon

    changeAppIcon.revertToDefaultAppIcon(successCallbackFunction, ErrorCallbackFunction);


## License

The MIT License

Copyright (c) 2017 Dom Slatford (http://github.com/domisginger)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
