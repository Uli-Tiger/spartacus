/// <reference types="jest" />

import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import {
  cartBaseFeatureModulePath,
  generateDefaultWorkspace,
  LibraryOptions as SpartacusOrderOptions,
  ORDER_FEATURE_NAME,
  orderFeatureModulePath,
  SPARTACUS_ORDER,
  SPARTACUS_SCHEMATICS,
  userFeatureModulePath,
} from '@spartacus/schematics';
import * as path from 'path';
import { peerDependencies } from '../../package.json';

const collectionPath = path.join(__dirname, '../collection.json');
const scssFilePath = 'src/styles/spartacus/order.scss';

describe('Spartacus Order schematics: ng-add', () => {
  const schematicRunner = new SchematicTestRunner(
    SPARTACUS_ORDER,
    collectionPath
  );

  let appTree: UnitTestTree;

  const libraryNoFeaturesOptions: SpartacusOrderOptions = {
    project: 'schematics-test',
    lazy: true,
    features: [],
  };

  const orderFeatureOptions: SpartacusOrderOptions = {
    ...libraryNoFeaturesOptions,
    features: [ORDER_FEATURE_NAME],
  };

  describe('Without features', () => {
    beforeAll(async () => {
      appTree = await generateDefaultWorkspace(schematicRunner, appTree);

      appTree = await schematicRunner.runSchematic(
        'ng-add',
        { ...libraryNoFeaturesOptions, features: [] },
        appTree
      );
    });

    it('should not create any of the feature modules', () => {
      expect(appTree.exists(orderFeatureModulePath)).toBeFalsy();
    });

    it('should install necessary Spartacus libraries', () => {
      const packageJson = JSON.parse(appTree.readContent('package.json'));
      let dependencies: Record<string, string> = {};
      dependencies = { ...packageJson.dependencies };
      dependencies = { ...dependencies, ...packageJson.devDependencies };

      for (const toAdd in peerDependencies) {
        // skip the SPARTACUS_SCHEMATICS, as those are added only when running by the Angular CLI, and not in the testing environment
        if (
          !peerDependencies.hasOwnProperty(toAdd) ||
          toAdd === SPARTACUS_SCHEMATICS
        ) {
          continue;
        }
        // TODO: after 4.0: use this test, as we'll have synced versions between lib's and root package.json
        // const expectedVersion = (peerDependencies as Record<
        //   string,
        //   string
        // >)[toAdd];
        const expectedDependency = dependencies[toAdd];
        expect(expectedDependency).toBeTruthy();
        // expect(expectedDependency).toEqual(expectedVersion);
      }
    });
  });

  describe('Order feature', () => {
    describe('general setup', () => {
      beforeAll(async () => {
        appTree = await generateDefaultWorkspace(schematicRunner, appTree);
        appTree = await schematicRunner.runSchematic(
          'ng-add',
          orderFeatureOptions,
          appTree
        );
      });

      it('should add the feature using the lazy loading syntax', async () => {
        const module = appTree.readContent(orderFeatureModulePath);
        expect(module).toMatchSnapshot();
      });

      it('should NOT install the required feature dependencies', async () => {
        const baseCartFeatureModule = appTree.readContent(
          cartBaseFeatureModulePath
        );
        expect(baseCartFeatureModule).toBeFalsy();

        const userFeatureModule = appTree.readContent(userFeatureModulePath);
        expect(userFeatureModule).toBeFalsy();
      });

      describe('styling', () => {
        it('should create a proper scss file', () => {
          const scssContent = appTree.readContent(scssFilePath);
          expect(scssContent).toMatchSnapshot();
        });

        it('should update angular.json', async () => {
          const content = appTree.readContent('/angular.json');
          expect(content).toMatchSnapshot();
        });
      });
    });

    describe('eager loading', () => {
      beforeAll(async () => {
        appTree = await generateDefaultWorkspace(schematicRunner, appTree);
        appTree = await schematicRunner.runSchematic(
          'ng-add',
          { ...orderFeatureOptions, lazy: false },
          appTree
        );
      });

      it('should import appropriate modules', async () => {
        const module = appTree.readContent(orderFeatureModulePath);
        expect(module).toMatchSnapshot();
      });
    });
  });
});
