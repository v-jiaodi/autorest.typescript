import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface DefaultDurationProperty {
    value: string;
}

export declare class DurationClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DurationClientOptionalParams);
    readonly query: QueryOperations;
    readonly property: PropertyOperations;
    readonly header: HeaderOperations;
}

export declare interface DurationClientOptionalParams extends ClientOptions {
}

export declare interface Float64SecondsDurationProperty {
    value: number;
}

export declare interface FloatSecondsDurationArrayProperty {
    value: number[];
}

export declare interface FloatSecondsDurationProperty {
    value: number;
}

export declare interface HeaderDefaultOptionalParams extends OperationOptions {
}

export declare interface HeaderFloat64SecondsOptionalParams extends OperationOptions {
}

export declare interface HeaderFloatSecondsOptionalParams extends OperationOptions {
}

export declare interface HeaderInt32SecondsOptionalParams extends OperationOptions {
}

export declare interface HeaderIso8601ArrayOptionalParams extends OperationOptions {
}

export declare interface HeaderIso8601OptionalParams extends OperationOptions {
}

export declare interface HeaderOperations {
    default: (duration: string, options?: HeaderDefaultOptionalParams) => Promise<void>;
    iso8601: (duration: string, options?: HeaderIso8601OptionalParams) => Promise<void>;
    iso8601Array: (duration: string[], options?: HeaderIso8601ArrayOptionalParams) => Promise<void>;
    int32Seconds: (duration: number, options?: HeaderInt32SecondsOptionalParams) => Promise<void>;
    floatSeconds: (duration: number, options?: HeaderFloatSecondsOptionalParams) => Promise<void>;
    float64Seconds: (duration: number, options?: HeaderFloat64SecondsOptionalParams) => Promise<void>;
}

export declare interface Int32SecondsDurationProperty {
    value: number;
}

export declare interface Iso8601DurationProperty {
    value: string;
}

export declare interface PropertyDefaultOptionalParams extends OperationOptions {
}

export declare interface PropertyFloat64SecondsOptionalParams extends OperationOptions {
}

export declare interface PropertyFloatSecondsArrayOptionalParams extends OperationOptions {
}

export declare interface PropertyFloatSecondsOptionalParams extends OperationOptions {
}

export declare interface PropertyInt32SecondsOptionalParams extends OperationOptions {
}

export declare interface PropertyIso8601OptionalParams extends OperationOptions {
}

export declare interface PropertyOperations {
    default: (body: DefaultDurationProperty, options?: PropertyDefaultOptionalParams) => Promise<DefaultDurationProperty>;
    iso8601: (body: Iso8601DurationProperty, options?: PropertyIso8601OptionalParams) => Promise<Iso8601DurationProperty>;
    int32Seconds: (body: Int32SecondsDurationProperty, options?: PropertyInt32SecondsOptionalParams) => Promise<Int32SecondsDurationProperty>;
    floatSeconds: (body: FloatSecondsDurationProperty, options?: PropertyFloatSecondsOptionalParams) => Promise<FloatSecondsDurationProperty>;
    float64Seconds: (body: Float64SecondsDurationProperty, options?: PropertyFloat64SecondsOptionalParams) => Promise<Float64SecondsDurationProperty>;
    floatSecondsArray: (body: FloatSecondsDurationArrayProperty, options?: PropertyFloatSecondsArrayOptionalParams) => Promise<FloatSecondsDurationArrayProperty>;
}

export declare interface QueryDefaultOptionalParams extends OperationOptions {
}

export declare interface QueryFloat64SecondsOptionalParams extends OperationOptions {
}

export declare interface QueryFloatSecondsOptionalParams extends OperationOptions {
}

export declare interface QueryInt32SecondsArrayOptionalParams extends OperationOptions {
}

export declare interface QueryInt32SecondsOptionalParams extends OperationOptions {
}

export declare interface QueryIso8601OptionalParams extends OperationOptions {
}

export declare interface QueryOperations {
    default: (input: string, options?: QueryDefaultOptionalParams) => Promise<void>;
    iso8601: (input: string, options?: QueryIso8601OptionalParams) => Promise<void>;
    int32Seconds: (input: number, options?: QueryInt32SecondsOptionalParams) => Promise<void>;
    floatSeconds: (input: number, options?: QueryFloatSecondsOptionalParams) => Promise<void>;
    float64Seconds: (input: number, options?: QueryFloat64SecondsOptionalParams) => Promise<void>;
    int32SecondsArray: (input: number[], options?: QueryInt32SecondsArrayOptionalParams) => Promise<void>;
}

export { }
