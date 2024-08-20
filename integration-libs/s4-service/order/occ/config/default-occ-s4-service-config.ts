/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { OccConfig } from '@spartacus/core';
import { S4ServiceOccEndpoints } from '../model';

const s4ServiceOccEndpoints: S4ServiceOccEndpoints = {
  rescheduleService:
    'users/${userId}/orders/${code}/serviceOrder/serviceScheduleSlot',
};

export const defaultOccServiceOrderConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        ...s4ServiceOccEndpoints,
      },
    },
  },
};
