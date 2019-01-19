// Type definitions for Material Components Web 0.43
// Project: https://material.io/components/
// Definitions by: Arthur Groupp <https://github.com/agroupp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MDCStrings } from 'material__base';

export interface cssClasses extends MDCStrings {
    ROOT: 'mdc-drawer';
    DISMISSIBLE: 'mdc-drawer--dismissible',
    MODAL: 'mdc-drawer--modal',
    OPEN: 'mdc-drawer--open';
    ANIMATE: 'mdc-drawer--animate';
    OPENING: 'mdc-drawer--opening',
    CLOSING: 'mdc-drawer--closing',
}

export interface strings extends MDCStrings {
    APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
    SCRIM_SELECTOR: '.mdc-drawer-scrim',
    CLOSE_EVENT: 'MDCDrawer:closed',
    OPEN_EVENT: 'MDCDrawer:opened',
}

