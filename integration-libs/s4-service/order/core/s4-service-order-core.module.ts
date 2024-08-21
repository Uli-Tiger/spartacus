/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { NgModule } from '@angular/core';
import { CxDatePipe } from '@spartacus/core';
import { CancelServiceOrderService } from './facade';
import { CancelServiceOrderFacade } from '@spartacus/s4-service/root';
import { CancelServiceOrderConnector } from './connector';
import { RescheduleServiceOrderService } from './facade';
import { RescheduleServiceOrderFacade } from '@spartacus/s4-service/root';
import { RescheduleServiceOrderConnector } from './connector';

@NgModule({
  providers: [
    CxDatePipe,
    CancelServiceOrderService,
    {
      provide: CancelServiceOrderFacade,
      useExisting: CancelServiceOrderService,
    },
    CancelServiceOrderConnector,
    RescheduleServiceOrderService,
    {
      provide: RescheduleServiceOrderFacade,
      useExisting: RescheduleServiceOrderService,
    },
    RescheduleServiceOrderConnector,
  ],
})
export class S4ServiceOrderCoreModule {}
