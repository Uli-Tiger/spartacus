/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import {
  ConfiguratorCoreConfig,
  ConfiguratorUISettingsConfig,
} from '@spartacus/product-configurator/rulebased';
@NgModule({
  providers: [
    provideConfig(<ConfiguratorUISettingsConfig>{
      productConfigurator: {
        enableNavigationToConflict: true,
      },
    }),
    provideConfig(<ConfiguratorCoreConfig>{
      productConfigurator: {
        enableVariantSearch: true,
      },
    }),
  ],
})
export class TigerModule {}
