//
//  Communication.m
//  MyApp
//
//  Created by LIUYONG on 2017/10/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "Communication.h"
#import "CommunicationViewController.h"
#import "AppDelegate.h"

@implementation Communication
RCT_EXPORT_MODULE()
- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(presentViewControllerFromReactNative:(NSString *)params) {
  NSLog(@"React Native 传递的参数:%@",params);
  
  CommunicationViewController *communicationVC = [CommunicationViewController new];
  communicationVC.params = params;
  
  AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
  UIViewController *rootVC = (UIViewController *)[[app window] rootViewController];
  
  [rootVC presentViewController:communicationVC animated:YES completion:nil];
}

@end
