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
* Enum class InstanceSource.
* @enum {}
* @readonly
*/
export default class InstanceSource {
    
        /**
         * value: "PUBLIC_URL"
         * @const
         */
        "PUBLIC_URL" = "PUBLIC_URL";

    
        /**
         * value: "API_EMBEDDED"
         * @const
         */
        "API_EMBEDDED" = "API_EMBEDDED";

    
        /**
         * value: "API_REMOTE"
         * @const
         */
        "API_REMOTE" = "API_REMOTE";

    
        /**
         * value: "UI_REMOTE"
         * @const
         */
        "UI_REMOTE" = "UI_REMOTE";

    

    /**
    * Returns a <code>InstanceSource</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/InstanceSource} The enum <code>InstanceSource</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

