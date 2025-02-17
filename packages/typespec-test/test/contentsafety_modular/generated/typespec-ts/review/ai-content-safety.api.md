## API Report File for "@azure-rest/ai-content-safety"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ClientOptions } from '@azure-rest/core-client';
import { KeyCredential } from '@azure/core-auth';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { TokenCredential } from '@azure/core-auth';

// @public
export interface AddOrUpdateBlockItemsOptions {
    blockItems: TextBlockItemInfo[];
}

// @public (undocumented)
export interface AddOrUpdateBlockItemsRequestOptions extends OperationOptions {
}

// @public
export interface AddOrUpdateBlockItemsResult {
    value?: TextBlockItem[];
}

// @public
export interface AnalyzeImageOptions {
    categories?: ImageCategory[];
    image: ImageData_2;
    outputType?: AnalyzeImageOutputType;
}

// @public
export type AnalyzeImageOutputType = string;

// @public (undocumented)
export interface AnalyzeImageRequestOptions extends OperationOptions {
}

// @public
export interface AnalyzeImageResult {
    analyzeResults: ImageAnalyzeSeverityResult[];
}

// @public
export interface AnalyzeTextOptions {
    blocklistNames?: string[];
    breakByBlocklists?: boolean;
    categories?: TextCategory[];
    outputType?: AnalyzeTextOutputType;
    text: string;
}

// @public
export type AnalyzeTextOutputType = string;

// @public (undocumented)
export interface AnalyzeTextRequestOptions extends OperationOptions {
}

// @public
export interface AnalyzeTextResult {
    analyzeResults: TextAnalyzeSeverityResult[];
    blocklistsMatchResults?: TextBlocklistMatchResult[];
}

// @public (undocumented)
export class ContentSafetyClient {
    constructor(endpoint: string, credential: KeyCredential | TokenCredential, options?: ContentSafetyClientOptions);
    addOrUpdateBlockItems(blocklistName: string, body: AddOrUpdateBlockItemsOptions, options?: AddOrUpdateBlockItemsRequestOptions): Promise<AddOrUpdateBlockItemsResult>;
    analyzeImage(body: AnalyzeImageOptions, options?: AnalyzeImageRequestOptions): Promise<AnalyzeImageResult>;
    analyzeText(body: AnalyzeTextOptions, options?: AnalyzeTextRequestOptions): Promise<AnalyzeTextResult>;
    createOrUpdateTextBlocklist(blocklistName: string, resource: TextBlocklist, options?: CreateOrUpdateTextBlocklistOptions): Promise<TextBlocklist>;
    deleteTextBlocklist(blocklistName: string, options?: DeleteTextBlocklistOptions): Promise<void>;
    getTextBlocklist(blocklistName: string, options?: GetTextBlocklistOptions): Promise<TextBlocklist>;
    getTextBlocklistItem(blocklistName: string, blockItemId: string, options?: GetTextBlocklistItemOptions): Promise<TextBlockItem>;
    listTextBlocklistItems(blocklistName: string, options?: ListTextBlocklistItemsOptions): PagedAsyncIterableIterator<TextBlockItem>;
    listTextBlocklists(options?: ListTextBlocklistsOptions): PagedAsyncIterableIterator<TextBlocklist>;
    readonly pipeline: Pipeline;
    removeBlockItems(blocklistName: string, body: RemoveBlockItemsOptions, options?: RemoveBlockItemsRequestOptions): Promise<void>;
}

// @public (undocumented)
export interface ContentSafetyClientOptions extends ClientOptions {
}

// @public
export type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

// @public (undocumented)
export interface CreateOrUpdateTextBlocklistOptions extends OperationOptions {
    contentType?: string;
}

// @public (undocumented)
export interface DeleteTextBlocklistOptions extends OperationOptions {
}

// @public (undocumented)
export interface GetTextBlocklistItemOptions extends OperationOptions {
}

// @public (undocumented)
export interface GetTextBlocklistOptions extends OperationOptions {
}

// @public
export interface ImageAnalyzeSeverityResult {
    category: ImageCategory;
    severity?: number;
}

// @public
export type ImageCategory = string;

// @public
interface ImageData_2 {
    blobUrl?: string;
    content?: Uint8Array;
}
export { ImageData_2 as ImageData }

// @public (undocumented)
export interface ListTextBlocklistItemsOptions extends OperationOptions {
    maxpagesize?: number;
    skip?: number;
    top?: number;
}

// @public (undocumented)
export interface ListTextBlocklistsOptions extends OperationOptions {
}

// @public
export interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings extends PageSettings = PageSettings> {
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;
    next(): Promise<IteratorResult<TElement>>;
}

// @public
export interface PagedTextBlockItem {
    nextLink?: string;
    value: TextBlockItem[];
}

// @public
export interface PagedTextBlocklist {
    nextLink?: string;
    value: TextBlocklist[];
}

// @public
export interface PageSettings {
    continuationToken?: string;
}

// @public
export interface RemoveBlockItemsOptions {
    blockItemIds: string[];
}

// @public (undocumented)
export interface RemoveBlockItemsRequestOptions extends OperationOptions {
}

// @public
export interface TextAnalyzeSeverityResult {
    category: TextCategory;
    severity?: number;
}

// @public
export interface TextBlockItem {
    readonly blockItemId: string;
    description?: string;
    text: string;
}

// @public
export interface TextBlockItemInfo {
    description?: string;
    text: string;
}

// @public
export interface TextBlocklist {
    readonly blocklistName: string;
    description?: string;
}

// @public
export interface TextBlocklistMatchResult {
    blockItemId: string;
    blockItemText: string;
    blocklistName: string;
}

// @public
export type TextCategory = string;

// (No @packageDocumentation comment for this package)

```
