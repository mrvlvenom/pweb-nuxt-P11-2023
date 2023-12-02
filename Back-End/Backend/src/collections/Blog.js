import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Blog = {
    slug : "Blog",
    access: {
        read : () => true,
        create : () => true,
        update : () => true,
        delete : () => true
    },
    admin : {
        useAsTitle : "title"
    },
    hooks: {
        afterOperation: [
            async (args) => {
                if (args.operation == "create") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "Blog",
                            action: "create",
                            timestamp: new Date(),
                        },
                    });
                } else if (args.operation == "update") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "Blog",
                            action: "update",
                            timestamp: new Date(),
                        },
                    });
                } else if (args.operation == "delete") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "Blog",
                            action: "delete",
                            timestamp: new Date(),
                        },
                    });
                }
            },
        ],
    },
    fields : [
        {
            name: "title",
            type: "text",
            required: true,
            label: "Title",
        },
        {
            name: "author",
            type: "text",
            required: true,
            label: "Author",
        },
        {
            name: "content",
            type: "textarea",
            required: true,
            label: "Content",
        },
        {
            name: "releaseDate",
            type: "date",
            required: true,
            label: "Release Date",
            admin: {
                date: {
                    pickerAppearance: 'dayOnly',
                    displayFormat: 'dd/MM/yyyy',
                },
            },
        },
        {
            name: "imageLink",
            type: "textarea",
            required: true,
            label: "Image Link",
        }
    ],
}

export default Blog