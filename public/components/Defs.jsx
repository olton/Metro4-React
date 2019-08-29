const Defs = {
    OPEN_BRACE: "{",
    CLOSE_BRACE: "}"
};

export default Defs;

export const tablePropsHeader = [
    {
        name: "prop",
        title: "Property",
        template: "<code>%VAL%</code>"
    },
    {
        name: "defValue",
        title: "Default Value",
        template: "<code>%VAL%</code>"
    },
    {
        name: "desc",
        title: "Description",
    },
];

export const FetchStatus = {
    ok: "OK",
    error: "ERROR",
    fetching: "FETCHING",
    init: "INIT"
};