function JsonLd(props: { data: object }) {
    return <script type="application/ld+json" dangerouslySetInnerHTML={{
        // Escape slashes to prevent xss.
        // See: https://sophiebits.com/2012/08/03/preventing-xss-json.html
        __html: JSON.stringify(props.data).replace(/\//g, "\\/")
    }} />
}
export default JsonLd
