/**
 * ChangeAppIcon.m
 * Created by Dom Slatford
 * Copyright (c) 2017 Dom Slatford. All rights reserved.
 * MIT Licensed
 */

#import "ChangeAppIcon.h"

@implementation ChangeAppIcon

- (void)changeIcon:(CDVInvokedUrlCommand*)command
{     
    CDVPluginResult* pluginResult = nil;
    NSString* alternateIconName = [command.arguments objectAtIndex:0];

    BOOL supportsAlternateIcons = [UIApplication supportsAlternateIcons];
    
    if (supportsAlternateIcons) {     
        [UIApplication setAlternateIconName:alternateIconName completion:^(NSError *error){      
            if (error != nil) {            
                NSLog(error);
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Error Changing App Icon"];
            } else { 
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
            }

            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];    
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
}

@end
