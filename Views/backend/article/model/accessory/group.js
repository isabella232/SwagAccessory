/**
 * Shopware 4.0
 * Copyright © 2012 shopware AG
 *
 * According to our dual licensing model, this program can be used either
 * under the terms of the GNU Affero General Public License, version 3,
 * or under a proprietary license.
 *
 * The texts of the GNU Affero General Public License with an additional
 * permission and of our proprietary license can be found at and
 * in the LICENSE file you have received along with this program.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * "Shopware" is a registered trademark of shopware AG.
 * The licensing of the program under the AGPLv3 does not imply a
 * trademark license. Therefore any rights, title and interest in
 * our trademarks remain entirely with us.
 */

/**
 * Shopware Accessory Article Model
 */
//{block name="backend/article/model/accessory/group"}
Ext.define('Shopware.apps.Article.model.accessory.Group', {
    /**
     * Extends the standard ExtJS 4
     * @string
     */
    extend: 'Ext.data.Model',

    /**
     * The fields used for this model
     * @array
     */
    fields: [
        //{block name="backend/article/model/accessory/group/fields"}{/block}
        'id',
        'name',
        'count',
        'article_id',
        'description',
        'image'
    ],
    /**
     * Configure the data communication
     * @object
     */
    proxy: {
        type: 'ajax',
        /**
         * Configure the url mapping for the different
         * @object
         */
        api: {
            //read out all groups
            read: '{url controller="SwagAccessory" action="getAccessoryGroups"}',
            //create groups
            create: '{url controller="SwagAccessory" action="createAccessoryGroup"}',
            //edit group
            update: '{url controller="SwagAccessory" action="updateAccessoryGroup"}',
            //function to delete groups
            destroy: '{url controller="SwagAccessory" action="deleteGroups"}'
        },

        /**
         * Configure the data reader
         * @object
         */
        reader: {
            type: 'json',
            root: 'data',
            //total values, used for paging
            totalProperty: 'total'
        }
    },

    associations: [
        { type: 'hasMany', model: 'Shopware.apps.Article.model.accessory.Article', name: 'getArticles',  associationKey: 'articles' }
    ]
});
//{/block}