import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare type NewEnum = "newEnumMember";

export declare interface NewModel {
    newProp: string;
    enumProp: NewEnum;
    unionProp: NewUnion;
}

export declare interface NewOpInNewInterfaceOptionalParams extends OperationOptions {
}

export declare interface NewOpOptionalParams extends OperationOptions {
}

export declare type NewUnion = string | number;

export declare class RenamedFromClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, version: Versions, options?: RenamedFromClientOptionalParams);
    newOpInNewInterface(body: NewModel, options?: NewOpInNewInterfaceOptionalParams): Promise<NewModel>;
    newOp(body: NewModel, newQuery: string, options?: NewOpOptionalParams): Promise<NewModel>;
}

export declare interface RenamedFromClientOptionalParams extends ClientOptions {
}

export declare type Versions = "v1" | "v2";

export { }
