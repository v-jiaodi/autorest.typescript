// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureKeyCredential } from "@azure/core-auth";
import createAzureHealthInsightsClient, {
  getLongRunningPoller,
} from "@azure-rest/health-insights-radiologyinsights";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateJob
 *
 * @summary call operation CreateJob
 */
async function createJobSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureHealthInsightsClient(endpointParam, credential);
  const id = "{Your id}";
  const initialResponse = await client
    .path("/radiology-insights/jobs/{id}", id)
    .put({
      body: {
        jobData: {
          patients: [
            {
              id: "{Your id}",
              details: {
                sex: "female",
                birthDate: new Date(),
                clinicalInfo: [
                  {
                    resourceType: "{Your resourceType}",
                    id: "{Your id}",
                    meta: {
                      versionId: "{Your versionId}",
                      lastUpdated: "{Your lastUpdated}",
                      source: "{Your source}",
                      profile: ["{Your profile}"],
                      security: [
                        {
                          id: "{Your id}",
                          extension: [
                            {
                              id: "{Your id}",
                              extension: [{} as any /**FIXME */],
                              url: "{Your url}",
                              valueQuantity: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                value: 123,
                                comparator: "{Your comparator}",
                                unit: "{Your unit}",
                                system: "{Your system}",
                                code: "{Your code}",
                              },
                              valueCodeableConcept: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                coding: [{} as any /**FIXME */],
                                text: "{Your text}",
                              },
                              valueString: "{Your valueString}",
                              valueBoolean: true,
                              valueInteger: 123,
                              valueRange: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                low: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                                high: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                              },
                              valueRatio: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                numerator: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                                denominator: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                              },
                              valueSampledData: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                origin: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                                period: 123,
                                factor: 123,
                                lowerLimit: 123,
                                upperLimit: 123,
                                dimensions: 123,
                                data: "{Your data}",
                              },
                              valueTime: new Date(),
                              valueDateTime: "{Your valueDateTime}",
                              valuePeriod: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                start: "{Your start}",
                                end: "{Your end}",
                              },
                              valueReference: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                reference: "{Your reference}",
                                type: "{Your type}",
                                identifier: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  use: "{Your use}",
                                  type: {
                                    id: "{Your id}",
                                    extension: [{} as any /**FIXME */],
                                    coding: [{} as any /**FIXME */],
                                    text: "{Your text}",
                                  },
                                  system: "{Your system}",
                                  value: "{Your value}",
                                  period: {
                                    id: "{Your id}",
                                    extension: [{} as any /**FIXME */],
                                    start: "{Your start}",
                                    end: "{Your end}",
                                  },
                                  assigner: {} as any /**FIXME */,
                                },
                                display: "{Your display}",
                              },
                            },
                          ],
                          system: "{Your system}",
                          version: "{Your version}",
                          code: "{Your code}",
                          display: "{Your display}",
                        },
                      ],
                      tag: [
                        {
                          id: "{Your id}",
                          extension: [
                            {
                              id: "{Your id}",
                              extension: [{} as any /**FIXME */],
                              url: "{Your url}",
                              valueQuantity: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                value: 123,
                                comparator: "{Your comparator}",
                                unit: "{Your unit}",
                                system: "{Your system}",
                                code: "{Your code}",
                              },
                              valueCodeableConcept: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                coding: [{} as any /**FIXME */],
                                text: "{Your text}",
                              },
                              valueString: "{Your valueString}",
                              valueBoolean: true,
                              valueInteger: 123,
                              valueRange: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                low: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                                high: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                              },
                              valueRatio: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                numerator: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                                denominator: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                              },
                              valueSampledData: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                origin: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                                period: 123,
                                factor: 123,
                                lowerLimit: 123,
                                upperLimit: 123,
                                dimensions: 123,
                                data: "{Your data}",
                              },
                              valueTime: new Date(),
                              valueDateTime: "{Your valueDateTime}",
                              valuePeriod: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                start: "{Your start}",
                                end: "{Your end}",
                              },
                              valueReference: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                reference: "{Your reference}",
                                type: "{Your type}",
                                identifier: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  use: "{Your use}",
                                  type: {
                                    id: "{Your id}",
                                    extension: [{} as any /**FIXME */],
                                    coding: [{} as any /**FIXME */],
                                    text: "{Your text}",
                                  },
                                  system: "{Your system}",
                                  value: "{Your value}",
                                  period: {
                                    id: "{Your id}",
                                    extension: [{} as any /**FIXME */],
                                    start: "{Your start}",
                                    end: "{Your end}",
                                  },
                                  assigner: {} as any /**FIXME */,
                                },
                                display: "{Your display}",
                              },
                            },
                          ],
                          system: "{Your system}",
                          version: "{Your version}",
                          code: "{Your code}",
                          display: "{Your display}",
                        },
                      ],
                    },
                    implicitRules: "{Your implicitRules}",
                    language: "{Your language}",
                  },
                ],
              },
              encounters: [
                {
                  id: "{Your id}",
                  period: { start: new Date(), end: new Date() },
                  class: "inpatient",
                },
              ],
              patientDocuments: [
                {
                  type: "note",
                  clinicalType: "consultation",
                  id: "{Your id}",
                  language: "{Your language}",
                  createdAt: new Date(),
                  authors: [{ id: "{Your id}", fullName: "{Your fullName}" }],
                  specialtyType: "pathology",
                  administrativeMetadata: {
                    orderedProcedures: [
                      {
                        code: {
                          id: "{Your id}",
                          extension: [
                            {
                              id: "{Your id}",
                              extension: [{} as any /**FIXME */],
                              url: "{Your url}",
                              valueQuantity: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                value: 123,
                                comparator: "{Your comparator}",
                                unit: "{Your unit}",
                                system: "{Your system}",
                                code: "{Your code}",
                              },
                              valueCodeableConcept: {} as any /**FIXME */,
                              valueString: "{Your valueString}",
                              valueBoolean: true,
                              valueInteger: 123,
                              valueRange: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                low: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                                high: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                              },
                              valueRatio: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                numerator: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                                denominator: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                              },
                              valueSampledData: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                origin: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  value: 123,
                                  comparator: "{Your comparator}",
                                  unit: "{Your unit}",
                                  system: "{Your system}",
                                  code: "{Your code}",
                                },
                                period: 123,
                                factor: 123,
                                lowerLimit: 123,
                                upperLimit: 123,
                                dimensions: 123,
                                data: "{Your data}",
                              },
                              valueTime: new Date(),
                              valueDateTime: "{Your valueDateTime}",
                              valuePeriod: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                start: "{Your start}",
                                end: "{Your end}",
                              },
                              valueReference: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                reference: "{Your reference}",
                                type: "{Your type}",
                                identifier: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  use: "{Your use}",
                                  type: {} as any /**FIXME */,
                                  system: "{Your system}",
                                  value: "{Your value}",
                                  period: {
                                    id: "{Your id}",
                                    extension: [{} as any /**FIXME */],
                                    start: "{Your start}",
                                    end: "{Your end}",
                                  },
                                  assigner: {} as any /**FIXME */,
                                },
                                display: "{Your display}",
                              },
                            },
                          ],
                          coding: [
                            {
                              id: "{Your id}",
                              extension: [
                                {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  url: "{Your url}",
                                  valueQuantity: {
                                    id: "{Your id}",
                                    extension: [{} as any /**FIXME */],
                                    value: 123,
                                    comparator: "{Your comparator}",
                                    unit: "{Your unit}",
                                    system: "{Your system}",
                                    code: "{Your code}",
                                  },
                                  valueCodeableConcept: {} as any /**FIXME */,
                                  valueString: "{Your valueString}",
                                  valueBoolean: true,
                                  valueInteger: 123,
                                  valueRange: {
                                    id: "{Your id}",
                                    extension: [{} as any /**FIXME */],
                                    low: {
                                      id: "{Your id}",
                                      extension: [{} as any /**FIXME */],
                                      value: 123,
                                      comparator: "{Your comparator}",
                                      unit: "{Your unit}",
                                      system: "{Your system}",
                                      code: "{Your code}",
                                    },
                                    high: {
                                      id: "{Your id}",
                                      extension: [{} as any /**FIXME */],
                                      value: 123,
                                      comparator: "{Your comparator}",
                                      unit: "{Your unit}",
                                      system: "{Your system}",
                                      code: "{Your code}",
                                    },
                                  },
                                  valueRatio: {
                                    id: "{Your id}",
                                    extension: [{} as any /**FIXME */],
                                    numerator: {
                                      id: "{Your id}",
                                      extension: [{} as any /**FIXME */],
                                      value: 123,
                                      comparator: "{Your comparator}",
                                      unit: "{Your unit}",
                                      system: "{Your system}",
                                      code: "{Your code}",
                                    },
                                    denominator: {
                                      id: "{Your id}",
                                      extension: [{} as any /**FIXME */],
                                      value: 123,
                                      comparator: "{Your comparator}",
                                      unit: "{Your unit}",
                                      system: "{Your system}",
                                      code: "{Your code}",
                                    },
                                  },
                                  valueSampledData: {
                                    id: "{Your id}",
                                    extension: [{} as any /**FIXME */],
                                    origin: {
                                      id: "{Your id}",
                                      extension: [{} as any /**FIXME */],
                                      value: 123,
                                      comparator: "{Your comparator}",
                                      unit: "{Your unit}",
                                      system: "{Your system}",
                                      code: "{Your code}",
                                    },
                                    period: 123,
                                    factor: 123,
                                    lowerLimit: 123,
                                    upperLimit: 123,
                                    dimensions: 123,
                                    data: "{Your data}",
                                  },
                                  valueTime: new Date(),
                                  valueDateTime: "{Your valueDateTime}",
                                  valuePeriod: {
                                    id: "{Your id}",
                                    extension: [{} as any /**FIXME */],
                                    start: "{Your start}",
                                    end: "{Your end}",
                                  },
                                  valueReference: {
                                    id: "{Your id}",
                                    extension: [{} as any /**FIXME */],
                                    reference: "{Your reference}",
                                    type: "{Your type}",
                                    identifier: {
                                      id: "{Your id}",
                                      extension: [{} as any /**FIXME */],
                                      use: "{Your use}",
                                      type: {} as any /**FIXME */,
                                      system: "{Your system}",
                                      value: "{Your value}",
                                      period: {
                                        id: "{Your id}",
                                        extension: [{} as any /**FIXME */],
                                        start: "{Your start}",
                                        end: "{Your end}",
                                      },
                                      assigner: {} as any /**FIXME */,
                                    },
                                    display: "{Your display}",
                                  },
                                },
                              ],
                              system: "{Your system}",
                              version: "{Your version}",
                              code: "{Your code}",
                              display: "{Your display}",
                            },
                          ],
                          text: "{Your text}",
                        },
                        description: "{Your description}",
                        extension: [
                          {
                            id: "{Your id}",
                            extension: [{} as any /**FIXME */],
                            url: "{Your url}",
                            valueQuantity: {
                              id: "{Your id}",
                              extension: [{} as any /**FIXME */],
                              value: 123,
                              comparator: "{Your comparator}",
                              unit: "{Your unit}",
                              system: "{Your system}",
                              code: "{Your code}",
                            },
                            valueCodeableConcept: {
                              id: "{Your id}",
                              extension: [{} as any /**FIXME */],
                              coding: [
                                {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  system: "{Your system}",
                                  version: "{Your version}",
                                  code: "{Your code}",
                                  display: "{Your display}",
                                },
                              ],
                              text: "{Your text}",
                            },
                            valueString: "{Your valueString}",
                            valueBoolean: true,
                            valueInteger: 123,
                            valueRange: {
                              id: "{Your id}",
                              extension: [{} as any /**FIXME */],
                              low: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                value: 123,
                                comparator: "{Your comparator}",
                                unit: "{Your unit}",
                                system: "{Your system}",
                                code: "{Your code}",
                              },
                              high: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                value: 123,
                                comparator: "{Your comparator}",
                                unit: "{Your unit}",
                                system: "{Your system}",
                                code: "{Your code}",
                              },
                            },
                            valueRatio: {
                              id: "{Your id}",
                              extension: [{} as any /**FIXME */],
                              numerator: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                value: 123,
                                comparator: "{Your comparator}",
                                unit: "{Your unit}",
                                system: "{Your system}",
                                code: "{Your code}",
                              },
                              denominator: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                value: 123,
                                comparator: "{Your comparator}",
                                unit: "{Your unit}",
                                system: "{Your system}",
                                code: "{Your code}",
                              },
                            },
                            valueSampledData: {
                              id: "{Your id}",
                              extension: [{} as any /**FIXME */],
                              origin: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                value: 123,
                                comparator: "{Your comparator}",
                                unit: "{Your unit}",
                                system: "{Your system}",
                                code: "{Your code}",
                              },
                              period: 123,
                              factor: 123,
                              lowerLimit: 123,
                              upperLimit: 123,
                              dimensions: 123,
                              data: "{Your data}",
                            },
                            valueTime: new Date(),
                            valueDateTime: "{Your valueDateTime}",
                            valuePeriod: {
                              id: "{Your id}",
                              extension: [{} as any /**FIXME */],
                              start: "{Your start}",
                              end: "{Your end}",
                            },
                            valueReference: {
                              id: "{Your id}",
                              extension: [{} as any /**FIXME */],
                              reference: "{Your reference}",
                              type: "{Your type}",
                              identifier: {
                                id: "{Your id}",
                                extension: [{} as any /**FIXME */],
                                use: "{Your use}",
                                type: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  coding: [
                                    {
                                      id: "{Your id}",
                                      extension: [{} as any /**FIXME */],
                                      system: "{Your system}",
                                      version: "{Your version}",
                                      code: "{Your code}",
                                      display: "{Your display}",
                                    },
                                  ],
                                  text: "{Your text}",
                                },
                                system: "{Your system}",
                                value: "{Your value}",
                                period: {
                                  id: "{Your id}",
                                  extension: [{} as any /**FIXME */],
                                  start: "{Your start}",
                                  end: "{Your end}",
                                },
                                assigner: {} as any /**FIXME */,
                              },
                              display: "{Your display}",
                            },
                          },
                        ],
                      },
                    ],
                    encounterId: "{Your encounterId}",
                  },
                  content: { sourceType: "inline", value: "{Your value}" },
                },
              ],
            },
          ],
          configuration: {
            verbose: true,
            includeEvidence: true,
            inferenceTypes: ["ageMismatch"],
            inferenceOptions: {
              followupRecommendationOptions: {
                includeRecommendationsWithNoSpecifiedModality: true,
                includeRecommendationsInReferences: true,
                provideFocusedSentenceEvidence: true,
              },
              findingOptions: { provideFocusedSentenceEvidence: true },
            },
            locale: "{Your locale}",
          },
        },
      },
      queryParameters: { expand: "{Your expand}" },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  createJobSample();
}

main().catch(console.error);
