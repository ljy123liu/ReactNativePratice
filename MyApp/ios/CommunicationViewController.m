//
//  CommunicationViewController.m
//  MyApp
//
//  Created by LIUYONG on 2017/10/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CommunicationViewController.h"

@interface CommunicationViewController ()

@end

@implementation CommunicationViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    [self initUI];
}

- (void)initUI {
  self.view.backgroundColor = [UIColor whiteColor];
  
  UITextView *textView = [[UITextView alloc] initWithFrame:CGRectMake(20, 20, 200, 40)];
  textView.text = @"原生界面";
  textView.font = [UIFont systemFontOfSize:20];
  [self.view addSubview:textView];
  
  UIButton *button = [[UIButton alloc]initWithFrame:CGRectMake(20, 60, 100, 100)];
  [button setTitle:@"退出" forState:UIControlStateNormal];
  [button setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
  [self.view addSubview:button];
  [button addTarget:self action:@selector(buttonClick) forControlEvents:UIControlEventTouchUpInside];
  
  UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake(20, 200, 100, 30)];
  label.text = [NSString stringWithFormat:@"传递参数:%@",self.params];
  [label sizeToFit];
  [self.view addSubview:label];
}

- (void)buttonClick {
  [self dismissViewControllerAnimated:YES completion:nil];
}



@end
