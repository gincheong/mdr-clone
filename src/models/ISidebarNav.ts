import React from 'react';

export interface ISidebarNav {
  title: string;
  path: string;
  component?: React.FunctionComponent; // ! SidebarNav 에서는 view가 필요 없음
  layout?: string; // ! SidebarNav에서는 layout이 필요 없음
}