// const transferCodes = (code) => {
//     if (!code.length) return
//     return code.map((item) => {
//         let toUpperCaseString = ''
//         for (let i = 0; i < item.length; i++) {
//             if (item[i] === '_') {
//                 toUpperCaseString += item[++i].toUpperCase()
//             } else {
//                 toUpperCaseString += item[i]
//             }
//         }
//         item = toUpperCaseString
//         return item
//     })
// }

const transferCodes = (codes) => {
    if (!codes.length) return []
    return codes.map((code) => {
        return code.replace(/_([a-z])/g, (_, match) => match.toUpperCase())
    })
}

console.log(
    transferCodes([
        'operation_time',
        'onset_operation_time',
        'arrive_operation_time',
        'anesthesia_type',
        'operation_type',
        'operation_other',
        'miha_type',
        'complication',
        'complication_other',
    ])
)
