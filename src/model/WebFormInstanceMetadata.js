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
import WebFormUserInfo from './WebFormUserInfo';

/**
 * The WebFormInstanceMetadata model module.
 * @module model/WebFormInstanceMetadata
 * @version 1.1.0
 */
class WebFormInstanceMetadata {
    /**
     * Constructs a new <code>WebFormInstanceMetadata</code>.
     * Web Form Instance metadata containing information like created by, created time, etc.
     * @alias module:model/WebFormInstanceMetadata
     * @param expirationDateTime {Date} The datetime after which the Web Form Instance is inaccessible.
     * @param createdDateTime {Date} The dateTime when the Web Form Instance is created.
     * @param createdBy {module:model/WebFormUserInfo} 
     */
    constructor(expirationDateTime, createdDateTime, createdBy) { 
        
        WebFormInstanceMetadata.initialize(this, expirationDateTime, createdDateTime, createdBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, expirationDateTime, createdDateTime, createdBy) { 
        obj['expirationDateTime'] = expirationDateTime;
        obj['createdDateTime'] = createdDateTime;
        obj['createdBy'] = createdBy;
    }

    /**
     * Constructs a <code>WebFormInstanceMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebFormInstanceMetadata} obj Optional instance to populate.
     * @return {module:model/WebFormInstanceMetadata} The populated <code>WebFormInstanceMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebFormInstanceMetadata();

            if (data.hasOwnProperty('expirationDateTime')) {
                obj['expirationDateTime'] = ApiClient.convertToType(data['expirationDateTime'], 'Date');
            }
            if (data.hasOwnProperty('createdDateTime')) {
                obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'Date');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = WebFormUserInfo.constructFromObject(data['createdBy']);
            }
            if (data.hasOwnProperty('lastModifiedDateTime')) {
                obj['lastModifiedDateTime'] = ApiClient.convertToType(data['lastModifiedDateTime'], 'Date');
            }
            if (data.hasOwnProperty('lastModifiedBy')) {
                obj['lastModifiedBy'] = WebFormUserInfo.constructFromObject(data['lastModifiedBy']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebFormInstanceMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebFormInstanceMetadata</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebFormInstanceMetadata.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `createdBy`
        if (data['createdBy']) { // data not null
          WebFormUserInfo.validateJSON(data['createdBy']);
        }
        // validate the optional field `lastModifiedBy`
        if (data['lastModifiedBy']) { // data not null
          WebFormUserInfo.validateJSON(data['lastModifiedBy']);
        }

        return true;
    }


}

WebFormInstanceMetadata.RequiredProperties = ["expirationDateTime", "createdDateTime", "createdBy"];

/**
 * The datetime after which the Web Form Instance is inaccessible.
 * @member {Date} expirationDateTime
 */
WebFormInstanceMetadata.prototype['expirationDateTime'] = undefined;

/**
 * The dateTime when the Web Form Instance is created.
 * @member {Date} createdDateTime
 */
WebFormInstanceMetadata.prototype['createdDateTime'] = undefined;

/**
 * @member {module:model/WebFormUserInfo} createdBy
 */
WebFormInstanceMetadata.prototype['createdBy'] = undefined;

/**
 * The dateTime when the Web Form Instance is last modified.
 * @member {Date} lastModifiedDateTime
 */
WebFormInstanceMetadata.prototype['lastModifiedDateTime'] = undefined;

/**
 * @member {module:model/WebFormUserInfo} lastModifiedBy
 */
WebFormInstanceMetadata.prototype['lastModifiedBy'] = undefined;






export default WebFormInstanceMetadata;

