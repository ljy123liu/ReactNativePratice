//
//  Platform.m
//  MyApp
//
//  Created by LIUYONG on 2017/10/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "Platform.h"

@implementation Platform
RCT_EXPORT_MODULE()
- (NSDictionary<NSString *,id> *)constantsToExport {
  return @{@"systemName":@"iOS"};
}
@end
