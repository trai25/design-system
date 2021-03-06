/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Default as ContextBar } from 'ui/components/global-navigation/flavors/navigation-bar/index.react.example';
import { Default as ContextTabBar } from 'ui/components/global-navigation/flavors/navigation-tab-bar/index.react.example';

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'context-bar-theme-platform',
    label: 'Platform',
    element: <ContextBar className="context-bar--theme-default context-bar--theme-dark" />
  },
  {
    id: 'context-bar-theme-service',
    label: 'Service',
    element: <ContextTabBar className="context-bar--theme-service context-bar--theme-dark" appName="Service Console" />
  },
  {
    id: 'context-bar-theme-sales',
    label: 'Sales',
    element: <ContextTabBar className="context-bar--theme-sales context-bar--theme-dark" appName="Sales Console" />
  },
  {
    id: 'context-bar-theme-marketing',
    label: 'Marketing',
    element: <ContextBar className="slds-context-bar--theme-marketing context-bar--theme-dark" appName="Marketing Cloud" />
  },
  {
    id: 'context-bar-theme-analytics',
    label: 'Analytics',
    element: <ContextBar className="context-bar--theme-analytics context-bar--theme-dark" appName="Analytics" />
  },
  {
    id: 'context-bar-theme-community',
    label: 'Community',
    element: <ContextBar className="context-bar--theme-community context-bar--theme-dark" appName="Community" />
  },
];
