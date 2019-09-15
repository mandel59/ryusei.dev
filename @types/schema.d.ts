declare namespace SchemaOrg {
    type URL = string
    interface Thing {
        "@context": string
        url?: URL
        name?: string
        image?: URL
    }
    interface Person extends Thing { }
    interface CreativeWork extends Things {
        author: Person
    }
}
