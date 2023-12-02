/** @type {import('payload/types').CollectionConfig} */
const Log = {
    slug : "Log",
    access : {
        read : () => true,
        create : () => true,
    },
    fields : [
        {
            name: 'collectionName',
            type: 'text',
            required: true,
            label : 'Collection Name'
        },
        {
            name: 'action',
            type: 'text',
            required: true,
            label : 'Action'
        },
        {
            name: "timestamp",
            type: "date",
            required : true
        },
    ]
}

export default Log