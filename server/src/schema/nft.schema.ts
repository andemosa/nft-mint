import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    StoreNFTSchema:
 *      type: object
 *      additionalProperties: false
 *      required:
 *        - name
 *        - description
 *        - address
 *        - id
 *        - logo
 *      properties:
 *        name:
 *          type: string
 *          default:
 *        description:
 *          type: string
 *          default:
 *        address:
 *          type: string
 *          default:
 *        id:
 *          type: number
 *          default:
 *        logo:
 *          type: string
 *          default:
 *    StoreNFTResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *        name:
 *          type: string
 *        description:
 *          type: string
 *        logo:
 *          type: string
 *        address:
 *          type: string
 *        id:
 *          type: number
 *
 *    GetNFTsResponse:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          createdAt:
 *            type: string
 *          updatedAt:
 *            type: string
 *          name:
 *            type: string
 *          description:
 *            type: string
 *          logo:
 *            type: string
 *          address:
 *            type: string
 *          id:
 *            type: number
 *
 *    GetNFTDataResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *        name:
 *          type: string
 *        description:
 *          type: string
 *        logo:
 *          type: string
 *        address:
 *          type: string
 *        id:
 *          type: number
 */

export const StoreNFTSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }).min(1, { message: "Name is required" }),
    description: string({
      required_error: "Description is required",
    }).min(1, { message: "Description is required" }),
    logo: string({
      required_error: "Logo is required",
    })
      .min(1, { message: "Logo is required" })
      .url("Must be a valid URL"),
    address: string({
      required_error: "Address is required",
    }).min(1, { message: "Address is required" }),
    id: number({
      required_error: "ID is required",
      invalid_type_error: "ID must be a number",
    }),
  }),
});

export type StoreNFTInput = TypeOf<typeof StoreNFTSchema>;
