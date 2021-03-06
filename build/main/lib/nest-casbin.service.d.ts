import { Enforcer } from 'casbin';
import { Filter, Watcher } from 'casbin/lib/persist';
import { Effector } from 'casbin/lib/effect';
export declare class NestCasbinService {
    readonly enforcer: Enforcer;
    constructor(enforcer: Enforcer);
    reloadPolicy(): Promise<void>;
    addPolicy(...params: string[]): Promise<void>;
    removePolicy(...params: string[]): Promise<void>;
    getPolicy(): Promise<string[][]>;
    enforce(...params: string[]): Promise<boolean>;
    getAllRoles(): Promise<string[]>;
    getAllObjects(): Promise<string[]>;
    getAllSubjects(): Promise<string[]>;
    getUsersForRole(name: string, domain?: string): Promise<string[]>;
    hasRoleForUser(user: string, role: string, domain?: string): Promise<boolean>;
    addRoleForUser(user: string, role: string, domain?: string): Promise<boolean>;
    deleteRoleForUser(user: string, role: string, domain?: string): Promise<boolean>;
    deleteRolesForUser(user: string, domain?: string): Promise<boolean>;
    deleteUser(user: string): Promise<boolean>;
    deleteRole(role: string): Promise<boolean>;
    deletePermission(...permissions: string[]): Promise<boolean>;
    addPermissionForUser(user: string, ...permissions: string[]): Promise<boolean>;
    deletePermissionForUser(user: string, ...permissions: string[]): Promise<boolean>;
    deletePermissionsForUser(user: string): Promise<boolean>;
    getPermissionsForUser(user: string): Promise<string[][]>;
    hasPermissionForUser(user: string, ...permissions: string[]): Promise<boolean>;
    getAllActions(): Promise<string[]>;
    hasPolicy(...params: string[]): Promise<boolean>;
    hasNamedPolicy(p: string, ...params: string[]): Promise<boolean>;
    getRolesForUser(name: string, domain?: string): Promise<string[]>;
    getImplicitPermissionsForUser(name: string, ...domain: string[]): Promise<string[][]>;
    getImplicitRolesForUser(name: string, ...domain: string[]): Promise<string[]>;
    getNamedPolicy(name: string): Promise<string[][]>;
    addFunction(name: string, fn: any): Promise<void>;
    loadFilteredPolicy(filter: Filter): Promise<boolean>;
    enableAutoBuildRoleLinks(autoBuildRoleLinks: boolean): void;
    isFiltered(): boolean;
    enableAutoSave(autoSave: boolean): void;
    setWatcher(watcher: Watcher): void;
    enableLog(enable: boolean): void;
    enableEnforce(enable: boolean): void;
    setEffector(eft: Effector): void;
    clearPolicy(): void;
    addGroupingPolicy(): Promise<boolean>;
    checkPermission(...params: any[]): Promise<boolean>;
}
