import acron from "../../type/type"
export const Out = {
    clean: (): acron.OUT =>
    {
        return { code: "", cash: { code: "", return: "", Identifier: [ { name: "", to: "", value: "", num: 0 } ], Function: "" } }
    },
    cleanCash: ( out: acron.CASH_IDENTIFIER[] ) =>
    {
        return { code: "", return: "", Identifier: out }
    }
}
