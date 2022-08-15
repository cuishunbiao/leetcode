const data = {
    //出院诊断
    out_hospital_diag: {
        diag_type: '',//出院诊断
        diag_time: '',//确诊时间
        diag_coivd_19: '',//COVID_19
        is_hospital_heart_failure: '',//院内新发力衰竭
        is_hospital_heart_level: '',//心功能分级
        no_acs_chestpain_type: '',//非ACS心源性胸痛类型
        other_acs_chestpain_type: '',//其它非心源性胸痛
        diag_arni: '',// ARNI
        diag_arni_result: {//服用频次
            num: '',//次数
            week: '',//每周
            result: '',//单次剂量
        },
        diag_inhospital_complication: '',//住院期间并发症
    },
    //住院期间用药
    inhospital_drug: {
        inhospital_glycemic_drug: '',//降糖药物
        inhospital_glycemic_drug_name: '',//药物名称
        anticoagulation:'',//口服抗凝药物
        anticoagulation: '',//药物名称
        pcsk9: '',//PCSK9
        pcsk9_name:'',//名称
        pcsk9_dose:''//剂量
    },
    //危险因素
    risk_factors:[
        {
            desc: '高血压',
            result: ""
        },
        {
            desc: '高血脂症',
            result: ""
        },
        {
            desc: '糖尿病',
            result: ""
        },
        {
            desc: '吸烟',
            result: '',
            content: {
                title: '吸烟状态',
                desc: '吸烟',
                result: '',
                children: [
                    {
                        desc: '已戒烟',
                        code: 1,
                    },
                    {
                        desc: '当前仍吸烟',
                        code: 2,
                    }
                ]
            }
        },
        {
            desc: '肥胖',
            result: ''
        },
        {
            desc: '早发CVD家族史（男<55岁，女<60岁）',
            result: ''
        },
    ],
    //合并疾病
    merge_record: [
        {
            desc: '冠心病',
            result: "",
            content: {
                desc: '血运重建史',
                result: '',
                children: [
                    {
                        desc: '是',
                        code: 1,
                    },
                    {
                        desc: '否',
                        code: 2,
                    }
                ]
            }
        },
        {
            desc: '心房颤动',
            result: "",
            content: {
                desc: '分型史',
                result: '',
                children: [
                    {
                        desc: '阵发性',
                        code: 1,
                    },
                    {
                        desc: '持续性',
                        code: 2,
                    },
                    {
                        desc: '长程持续性',
                        code: 3,
                    },
                    {
                        desc: '永久性',
                        code: 4,
                    }
                ]
            }
        },
        {
            desc: '慢性心力衰竭',
            result: "",
            content: {
                desc: 'NYHA分级',
                result: '',
                children: [
                    {
                        desc: 'I',
                        code: 1,
                    },
                    {
                        desc: 'II',
                        code: 2,
                    },
                    {
                        desc: 'III',
                        code: 3,
                    },
                    {
                        desc: 'IV',
                        code: 4,
                    }
                ]
            }
        },
        {
            desc: '心脏瓣膜病',
            result: ''
        },
        {
            desc: '脑血管疾病',
            result: '',
            content: {
                desc: '描述',
                result: '',
                children: [
                    {
                        desc: '缺血性',
                        code: 1,
                    },
                    {
                        desc: '出血性',
                        code: 2,
                    }
                ]
            }
        }
    ],
    //检验结果
    examine_result: [
        {
            desc: '72h内肌钙蛋白',
            result: "",
            content: {
                desc: '72h内肌钙蛋白最高值',
                is_star: true,//是否是必填
                result: '',
                children: [
                    {
                        desc: 'TNT',
                        code: 1,
                    },
                    {
                        desc: 'TNI',
                        code: 2,
                    }
                ],
                content_num: '',//内容值
                content_select: ''//选择值
            }
        },
        {
            desc: '脑钠肽',
            result: "",
            content: {
                desc: '类型',
                is_star: false,//是否是必填
                result: '',
                children: [
                    {
                        desc: 'BNP',
                        code: 1,
                    },
                    {
                        desc: 'NT-proBNP',
                        code: 2,
                    }
                ],
                content_num: '',//内容值
                content_unit: ''//单位值
            }
        },
        {
            desc: '总胆固醇（TC）',
            result: "",
            content: {
                desc: '数值',
                is_star: true,//是否是必填
                content_num: '',//内容值
                content_unit: 'mmol/L'//单位值
            }
        },
        {
            desc: '超声心动图',
            result: "",
            content: [
                {
                    desc: 'LVEF',
                    is_star: false,//是否是必填
                    content_num: '',//内容值
                    content_unit: '%（诊疗过程中最低值）'//单位值
                },
                {
                    desc: '室壁瘤',
                    is_star: false,//是否是必填
                    result: '',
                },
                {
                    desc: '局部室壁活动异常',
                    is_star: false,//是否是必填
                    result: '',
                }
            ]
        },
    ],
    //出院信息
    out_hospital_info: {
        days: '',//住院天数
        total_cost: '',//总费用
        out_hospital_transport: '',//出院或30天转归
        out_hospital_edu: '',//离院宣教
        //出院
        out_hospital: {
            out_hospital_time: '',//出院时间
            out_hospital_result: '',//治疗结果
        },
        //转送其他医院
        transfer_hospital: {
            leave_hospital_door_time: '',//离开本院大门时间
            hospital_name: '',//医院名称
            is_web_hospital: true,//是否是网络医院
            leave_hospital_pci: true,//转运PCI
            pci_cathlab: true,//直达导管室
            inter_surgery_time: '',//实际介入手术开始时间
            guide_pass_time: '',//导丝通过时间
            transmission_ecg: true,//远程心电图传输
            transmission_ecg_time: '',//传输心电图至协作单位时间
            transmission_ecg_type: '',//传输方式
        },
        //院内继续治疗
        in_hospital_department: {
            department_time: '',//转科时间
            department_name: '',//接诊科室
            department_desc: ''//转科原因描述
        },
        //死亡
        death: {
            death_time: '',//死亡时间
            death_reason: '',//死亡原因
            death_desc: ''//描述
        }
    },
    //出院带药
    out_hospital_drug: {
        //抗血小板药物
        platelets: {
            result: '',//抗血小板药物 - 选择值 是-否
            is_star: true, //是否是必填项
            content: [
                {
                    key: '',//字典 中 药物名称字典
                    name: '',//药物名称
                    num: '',//次数
                    week: '',//每周
                    result: '',//单次剂量
                }
            ]
        },
        //ACEI/ARB
        acei_arb: {
            result: '',//ACEI/ARB - 选择值 是-否
            is_star: true, //是否是必填项
            content: [
                {
                    key: '',//字典 中 ACEI/ARB字典
                    name: '',//药物名称
                    num: '',//次数
                    week: '',//每周
                    result: '',//单次剂量
                }
            ]
        },
        //调脂药物
        acei_arb: {
            result: '',//调脂药物 - 选择值 是-否
            is_star: true, //是否是必填项
            content: [
                {
                    key: '',//字典 中 ACEI/ARB字典
                    name: '',//药物名称
                    num: '',//次数
                    week: '',//每周
                    result: '',//单次剂量
                }
            ]
        },
        //β受体阻滞剂
        acei_arb: {
            result: '',//β受体阻滞剂 - 选择值 是-否
            is_star: true, //是否是必填项
            content: [
                {
                    key: '',//字典 中 ACEI/ARB字典
                    name: '',//药物名称
                    num: '',//次数
                    week: '',//每周
                    result: '',//单次剂量
                }
            ]
        },
        remark: '',//患者情况备注
    }

    
    
}
/**
 * 
 * 出院诊断 - 出院诊断
 * 出院诊断 - COVID-19
 * 出院诊断 - 院内新发力衰竭 - 心功能分级
 * 出院诊断 - ARNI - 服用频次 - 次数和周数
 * 出院诊断 - 住院期间并发症
 * 住院期间用药 - 降糖药物 - 药物名称
 * 住院期间用药 - 口服抗凝药物 - 药物名称
 * 住院期间用药 - PCSK9 - 药物名称
 * 
 * 
 */
const code = {
    //出院诊断
    out_hospital_diag: [
        {
            desc: 'STEMI',
            code: 1,
        },
        {
            desc: '主动脉夹层',
            code: 2,
        },
        {
            desc: '肺动脉栓塞',
            code: 3,
        },
        {
            desc: '非ACS心源性胸痛',
            code: 4,
        },
        {
            desc: '其它非心源性胸痛',
            code: 5,
        }
    ]
}