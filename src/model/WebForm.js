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
import WebFormContent from './WebFormContent';
import WebFormMetadata from './WebFormMetadata';
import WebFormProperties from './WebFormProperties';
import WebFormState from './WebFormState';
import WebFormSummary from './WebFormSummary';

/**
 * The WebForm model module.
 * @module model/WebForm
 * @version 1.1.0
 */
class WebForm {
    /**
     * Constructs a new <code>WebForm</code>.
     * An object that fully describes an instance of a form
     * @alias module:model/WebForm
     * @implements module:model/WebFormSummary
     */
    constructor() { 
        WebFormSummary.initialize(this);
        WebForm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebForm} obj Optional instance to populate.
     * @return {module:model/WebForm} The populated <code>WebForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebForm();
            WebFormSummary.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('isPublished')) {
                obj['isPublished'] = ApiClient.convertToType(data['isPublished'], 'Boolean');
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('hasDraftChanges')) {
                obj['hasDraftChanges'] = ApiClient.convertToType(data['hasDraftChanges'], 'Boolean');
            }
            if (data.hasOwnProperty('formState')) {
                obj['formState'] = WebFormState.constructFromObject(data['formState']);
            }
            if (data.hasOwnProperty('formProperties')) {
                obj['formProperties'] = WebFormProperties.constructFromObject(data['formProperties']);
            }
            if (data.hasOwnProperty('formMetadata')) {
                obj['formMetadata'] = WebFormMetadata.constructFromObject(data['formMetadata']);
            }
            if (data.hasOwnProperty('versionId')) {
                obj['versionId'] = ApiClient.convertToType(data['versionId'], 'Number');
            }
            if (data.hasOwnProperty('formContent')) {
                obj['formContent'] = WebFormContent.constructFromObject(data['formContent']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebForm</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['accountId'] && !(typeof data['accountId'] === 'string' || data['accountId'] instanceof String)) {
            throw new Error("Expected the field `accountId` to be a primitive type in the JSON string but got " + data['accountId']);
        }
        // validate the optional field `formProperties`
        if (data['formProperties']) { // data not null
          WebFormProperties.validateJSON(data['formProperties']);
        }
        // validate the optional field `formMetadata`
        if (data['formMetadata']) { // data not null
          WebFormMetadata.validateJSON(data['formMetadata']);
        }
        // validate the optional field `formContent`
        if (data['formContent']) { // data not null
          WebFormContent.validateJSON(data['formContent']);
        }

        return true;
    }


}



/**
 * Unique identifier for a Web Form that is consistent for it's lifetime
 * @member {String} id
 */
WebForm.prototype['id'] = undefined;

/**
 * Account identifier in which the web form resides
 * @member {String} accountId
 */
WebForm.prototype['accountId'] = undefined;

/**
 * Has the form been published
 * @member {Boolean} isPublished
 */
WebForm.prototype['isPublished'] = undefined;

/**
 * Is the form currently enabled and available for data collection
 * @member {Boolean} isEnabled
 */
WebForm.prototype['isEnabled'] = undefined;

/**
 * Does the form have draft changes that need to be published?
 * @member {Boolean} hasDraftChanges
 */
WebForm.prototype['hasDraftChanges'] = undefined;

/**
 * @member {module:model/WebFormState} formState
 */
WebForm.prototype['formState'] = undefined;

/**
 * @member {module:model/WebFormProperties} formProperties
 */
WebForm.prototype['formProperties'] = undefined;

/**
 * @member {module:model/WebFormMetadata} formMetadata
 */
WebForm.prototype['formMetadata'] = undefined;

/**
 * Identifier for the current version of the web form that is published
 * @member {Number} versionId
 */
WebForm.prototype['versionId'] = undefined;

/**
 * @member {module:model/WebFormContent} formContent
 */
WebForm.prototype['formContent'] = undefined;


// Implement WebFormSummary interface:
/**
 * Unique identifier for a Web Form that is consistent for it's lifetime
 * @member {String} id
 */
WebFormSummary.prototype['id'] = undefined;
/**
 * Account identifier in which the web form resides
 * @member {String} accountId
 */
WebFormSummary.prototype['accountId'] = undefined;
/**
 * Has the form been published
 * @member {Boolean} isPublished
 */
WebFormSummary.prototype['isPublished'] = undefined;
/**
 * Is the form currently enabled and available for data collection
 * @member {Boolean} isEnabled
 */
WebFormSummary.prototype['isEnabled'] = undefined;
/**
 * Does the form have draft changes that need to be published?
 * @member {Boolean} hasDraftChanges
 */
WebFormSummary.prototype['hasDraftChanges'] = undefined;
/**
 * @member {module:model/WebFormState} formState
 */
WebFormSummary.prototype['formState'] = undefined;
/**
 * @member {module:model/WebFormProperties} formProperties
 */
WebFormSummary.prototype['formProperties'] = undefined;
/**
 * @member {module:model/WebFormMetadata} formMetadata
 */
WebFormSummary.prototype['formMetadata'] = undefined;




export default WebForm;
