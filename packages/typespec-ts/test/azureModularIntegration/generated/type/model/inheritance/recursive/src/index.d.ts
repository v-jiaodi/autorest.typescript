import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare interface Element_2 {
    extension?: Extension[];
}

declare interface Extension extends Element_2 {
    level: number;
}

export declare interface GetOptionalParams extends OperationOptions {
}

export declare interface PutOptionalParams extends OperationOptions {
}

export declare class RecursiveClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: RecursiveClientOptionalParams);
    get(options?: GetOptionalParams): Promise<Extension>;
    put(input: Extension, options?: PutOptionalParams): Promise<void>;
}

export declare interface RecursiveClientOptionalParams extends ClientOptions {
}

export { }
