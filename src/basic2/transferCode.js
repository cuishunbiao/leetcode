const transferCodes = (code) => {
    if (!code.length) return
    return code.map((item) => {
        let toUpperCaseString = ''
        for (let i = 0; i < item.length; i++) {
            if (item[i] === '_') {
                toUpperCaseString += item[++i].toUpperCase()
            } else {
                toUpperCaseString += item[i]
            }
        }
        item = toUpperCaseString
        return item
    })
}
console.log(
    transferCodes([
        'ais_vein_drug',
        'ais_vein_drug_other',
        'is_ais_vein_complication',
        'ais_vein_complication',
        'ais_vein_complication_other',
        'is_ais_vein_before_nihss',
    ])
)

;('aisVeinDrug')
aisVeinDrugOther
isAisVeinComplication
aisVeinComplication
aisVeinComplicationOther
isAisVeinBeforeNihss

// ais_vein_drug
// 静脉溶栓药物(字典表)
// ais_vein_drug_other
// 其他药物名称
// is_ais_vein_complication
// 是否有溶栓并发症【1是,2否】
// ais_vein_complication
// 溶栓并发症[逗号拼接]
// ais_vein_complication_other
// 溶栓并发症[其他]
// is_ais_vein_before_nihss
// 溶栓前NIHSS评分状态[1已评,2未评]
// ais_vein_before_nihss_score
// 溶栓前NIHSS评分
// is_ais_vein_after_nihss
// 溶栓结束后即刻NIHSS评分状态[1已评,2未评]
// ais_vein_after_nihss_score
// 溶栓结束后即刻NIHSS评分
// is_ais_vein_24h_nihss
// 溶栓后24h NIHSS评分状态[1已评,2未评,3死亡]
// ais_vein_24h_nihss_score
// 溶栓后24h NIHSS评分
// is_ais_vein_7day_nihss
// 7±2天 NIHSS评分状态[1已评,2未评,3死亡]
// ais_vein_7day_nihss_score
// 7±2天 NIHSS评分
// not_treat_reason
// 未给予血管内治疗的原因[逗号拼接]
// is_second_operation
// 是否二次手术[1是2否,
