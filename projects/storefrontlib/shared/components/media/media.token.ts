/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { InjectionToken } from '@angular/core';

/**
 * @deprecated since 2211.30. It will be eventually removed in the future
 */
export const USE_LEGACY_MEDIA_COMPONENT = new InjectionToken<boolean>(
  'USE_LEGACY_MEDIA_COMPONENT'
);
