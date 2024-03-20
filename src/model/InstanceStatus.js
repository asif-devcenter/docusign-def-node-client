/**
 * Web Forms API version 1.1
 * The Web Forms API facilitates generating semantic HTML forms around everyday contracts. 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class InstanceStatus.
* @enum {}
* @readonly
*/
export default class InstanceStatus {
    
        /**
         * value: "INITIATED"
         * @const
         */
        "INITIATED" = "INITIATED";

    
        /**
         * value: "SUBMITTED"
         * @const
         */
        "SUBMITTED" = "SUBMITTED";

    
        /**
         * value: "EXPIRED"
         * @const
         */
        "EXPIRED" = "EXPIRED";

    
        /**
         * value: "FAILED"
         * @const
         */
        "FAILED" = "FAILED";

    

    /**
    * Returns a <code>InstanceStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/InstanceStatus} The enum <code>InstanceStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

