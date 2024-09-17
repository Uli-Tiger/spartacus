/// <reference types="jest" />
import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import {
  CDC_B2B_FEATURE_NAME,
  CDC_FEATURE_NAME,
  cdcFeatureModulePath,
  generateDefaultWorkspace,
  LibraryOptions as SpartacusCdcOptions,
  ORGANIZATION_ADMINISTRATION_FEATURE_NAME,
  ORGANIZATION_USER_REGISTRATION_FEATURE_NAME,
  organizationAdministrationWrapperModulePath,
  organizationUserRegistrationWrapperModulePath,
  SPARTACUS_ASM,
  SPARTACUS_CDC,
  SPARTACUS_SCHEMATICS,
  SPARTACUS_USER,
  USER_ACCOUNT_FEATURE_NAME,
  USER_PROFILE_FEATURE_NAME,
  userAccountWrapperModulePath,
  userProfileWrapperModulePath,
} from '@spartacus/schematics';
import * as path from 'path';
import { peerDependencies } from '../../package.json';

const collectionPath = path.join(__dirname, '../collection.json');
describe('Spartacus CDC schematics: ng-add', () => {
  const schematicRunner = new SchematicTestRunner(
    SPARTACUS_CDC,
    collectionPath
  );
  let appTree: UnitTestTree;
  const libraryNoFeaturesOptions: SpartacusCdcOptions = {
    project: 'schematics-test',
    lazy: true,
    features: [],
  };
  const cdcFeatureOptions: SpartacusCdcOptions = {
    ...libraryNoFeaturesOptions,
    features: [CDC_FEATURE_NAME],
  };
  const cdcB2bFeatureOptions: SpartacusCdcOptions = {
    ...libraryNoFeaturesOptions,
    features: [CDC_B2B_FEATURE_NAME],
  };

  async function generateWorkspace() {
    schematicRunner.registerCollection(
      SPARTACUS_ASM,
      require.resolve('../../../../feature-libs/asm/schematics/collection.json')
    );
    schematicRunner.registerCollection(
      SPARTACUS_USER,
      path.join(
        __dirname,
        '../../../../feature-libs/user/schematics/collection.json'
      )
    );
    return (appTree = await generateDefaultWorkspace(schematicRunner, appTree));
  }

  describe('Without features', () => {
    beforeAll(async () => {
      appTree = await generateWorkspace();
      appTree = await schematicRunner.runSchematic(
        'ng-add',
        libraryNoFeaturesOptions,
        appTree
      );
    });
    it('should not create any of the feature modules', () => {
      expect(appTree.exists(cdcFeatureModulePath)).toBeFalsy();
    });
  });
  describe('CDC-B2C feature', () => {
    describe('validation of jsSDKUrl', () => {
      beforeAll(async () => {
        appTree = await generateWorkspace();
        appTree = await schematicRunner.runExternalSchematic(
          SPARTACUS_SCHEMATICS,
          'ng-add',
          {
            ...cdcFeatureOptions,
            features: [USER_ACCOUNT_FEATURE_NAME, USER_PROFILE_FEATURE_NAME],
          },
          appTree
        );
        appTree = await schematicRunner.runSchematic(
          'ng-add',
          { ...cdcFeatureOptions, javascriptUrl: '<dc>.gigya.com/<api-key>' },
          appTree
        );
      });
      it('should set the given javascriptUrl', async () => {
        const featureModule = appTree.readContent(cdcFeatureModulePath);
        expect(featureModule).toMatchSnapshot();
      });
    });
    describe('general setup', () => {
      beforeAll(async () => {
        appTree = await generateWorkspace();
        appTree = await schematicRunner.runExternalSchematic(
          SPARTACUS_SCHEMATICS,
          'ng-add',
          {
            ...cdcFeatureOptions,
            features: [USER_ACCOUNT_FEATURE_NAME, USER_PROFILE_FEATURE_NAME],
          },
          appTree
        );
        appTree = await schematicRunner.runSchematic(
          'ng-add',
          cdcFeatureOptions,
          appTree
        );
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
          // CXSPA-4872: after 4.0: use this test, as we'll have synced versions between lib's and root package.json
          // const expectedVersion = (peerDependencies as Record<
          //   string,
          //   string
          // >)[toAdd];
          const expectedDependency = dependencies[toAdd];
          expect(expectedDependency).toBeTruthy();
          // expect(expectedDependency).toEqual(expectedVersion);
        }
      });
      it('should add the feature using the lazy loading syntax', async () => {
        const featureModule = appTree.readContent(cdcFeatureModulePath);
        expect(featureModule).toMatchSnapshot();
      });
      it('should install the appropriate dependencies', async () => {
        const userAccountWrapperModule = appTree.readContent(
          userAccountWrapperModulePath
        );
        expect(userAccountWrapperModule).toMatchSnapshot();
        const userProfileWrapperModule = appTree.readContent(
          userProfileWrapperModulePath
        );
        expect(userProfileWrapperModule).toMatchSnapshot();
      });
    });
    describe('eager loading', () => {
      beforeAll(async () => {
        appTree = await generateWorkspace();
        appTree = await schematicRunner.runExternalSchematic(
          SPARTACUS_SCHEMATICS,
          'ng-add',
          {
            ...cdcFeatureOptions,
            features: [USER_ACCOUNT_FEATURE_NAME, USER_PROFILE_FEATURE_NAME],
          },
          appTree
        );
        appTree = await schematicRunner.runSchematic(
          'ng-add',
          { ...cdcFeatureOptions, lazy: false },
          appTree
        );
      });
      it('should import appropriate modules', async () => {
        const featureModule = appTree.readContent(cdcFeatureModulePath);
        expect(featureModule).toMatchSnapshot();
      });
    });
  });
  describe('CDC-B2B feature', () => {
    describe('validation of jsSDKUrl', () => {
      beforeAll(async () => {
        appTree = await generateWorkspace();
        appTree = await schematicRunner.runExternalSchematic(
          SPARTACUS_SCHEMATICS,
          'ng-add',
          {
            ...cdcB2bFeatureOptions,
            features: [
              USER_ACCOUNT_FEATURE_NAME,
              USER_PROFILE_FEATURE_NAME,
              ORGANIZATION_ADMINISTRATION_FEATURE_NAME,
              ORGANIZATION_USER_REGISTRATION_FEATURE_NAME,
            ],
          },
          appTree
        );
        appTree = await schematicRunner.runSchematic(
          'ng-add',
          {
            ...cdcB2bFeatureOptions,
            javascriptUrl: '<dc>.gigya.com/<api-key>',
          },
          appTree
        );
      });
      it('should set the given javascriptUrl', async () => {
        const featureModule = appTree.readContent(cdcFeatureModulePath);
        expect(featureModule).toMatchSnapshot();
      });
    });
    describe('general setup', () => {
      beforeAll(async () => {
        appTree = await generateWorkspace();
        appTree = await schematicRunner.runExternalSchematic(
          SPARTACUS_SCHEMATICS,
          'ng-add',
          {
            ...cdcB2bFeatureOptions,
            features: [
              USER_ACCOUNT_FEATURE_NAME,
              USER_PROFILE_FEATURE_NAME,
              ORGANIZATION_ADMINISTRATION_FEATURE_NAME,
              ORGANIZATION_USER_REGISTRATION_FEATURE_NAME,
            ],
          },
          appTree
        );
        appTree = await schematicRunner.runSchematic(
          'ng-add',
          cdcB2bFeatureOptions,
          appTree
        );
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
      it('should add the feature using the lazy loading syntax', async () => {
        const featureModule = appTree.readContent(cdcFeatureModulePath);
        expect(featureModule).toMatchSnapshot();
      });
      it('should install the appropriate dependencies', async () => {
        const userAccountWrapperModule = appTree.readContent(
          userAccountWrapperModulePath
        );
        expect(userAccountWrapperModule).toMatchSnapshot();
        const userProfileWrapperModule = appTree.readContent(
          userProfileWrapperModulePath
        );
        expect(userProfileWrapperModule).toMatchSnapshot();
        const administrationWrapperModule = appTree.readContent(
          organizationAdministrationWrapperModulePath
        );
        expect(administrationWrapperModule).toMatchSnapshot();
        const organizationUserRegistrationWrapperModule = appTree.readContent(
          organizationUserRegistrationWrapperModulePath
        );
        expect(organizationUserRegistrationWrapperModule).toMatchSnapshot();
      });
    });
    describe('eager loading', () => {
      beforeAll(async () => {
        appTree = await generateWorkspace();
        appTree = await schematicRunner.runExternalSchematic(
          SPARTACUS_SCHEMATICS,
          'ng-add',
          {
            ...cdcB2bFeatureOptions,
            features: [
              USER_ACCOUNT_FEATURE_NAME,
              USER_PROFILE_FEATURE_NAME,
              ORGANIZATION_ADMINISTRATION_FEATURE_NAME,
              ORGANIZATION_USER_REGISTRATION_FEATURE_NAME,
            ],
          },
          appTree
        );
        appTree = await schematicRunner.runSchematic(
          'ng-add',
          { ...cdcB2bFeatureOptions, lazy: false },
          appTree
        );
      });
      it('should import appropriate modules', async () => {
        const featureModule = appTree.readContent(cdcFeatureModulePath);
        expect(featureModule).toMatchSnapshot();
      });
    });
  });
});
