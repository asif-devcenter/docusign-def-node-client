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
import WebFormInstance from './WebFormInstance';

/**
 * The WebFormInstanceList model module.
 * @module model/WebFormInstanceList
 * @version 1.1.0
 */
class WebFormInstanceList {
    /**
     * Constructs a new <code>WebFormInstanceList</code>.
     * A list of web form instance items.
     * @alias module:model/WebFormInstanceList
     */
    constructor() { 
        
        WebFormInstanceList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebFormInstanceList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebFormInstanceList} obj Optional instance to populate.
     * @return {module:model/WebFormInstanceList} The populated <code>WebFormInstanceList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebFormInstanceList();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [WebFormInstance]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebFormInstanceList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebFormInstanceList</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                WebFormInstance.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Array of web form instance items.
 * @member {Array.<module:model/WebFormInstance>} items
 */
WebFormInstanceList.prototype['items'] = undefined;






export default WebFormInstanceList;

