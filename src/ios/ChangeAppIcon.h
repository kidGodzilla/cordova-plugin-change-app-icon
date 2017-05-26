/**
 * ChangeAppIcon.h
 * Created by Dom Slatford
 * Copyright (c) 2017 Dom Slatford. All rights reserved.
 * MIT Licensed
 */

#import <Cordova/CDVPlugin.h>

@interface ChangeAppIcon : CDVPlugin

- (void)changeIcon:(CDVInvokedUrlCommand*)command;

@end