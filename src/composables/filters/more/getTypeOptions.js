const getTypeOptions = () => {
    const typeOptions = [
        {id: "0", name: "All", value: ""},
        {id: "1", name: "Actions", value: "Actions"},
        {id: "2", name: "Attacks", value: "Attacks"},
        {id: "3", name: "Attacks Reactions", value: "AttacksReactions"},
        {id: "3", name: "Auras", value: "Auras"},
        {id: "3", name: "Items", value: "Items"},
        {id: "3", name: "Arrows", value: "Arrows"},
        {id: "3", name: "Equipments", value: "Equipments"},
    ]

    return { typeOptions }
}

export default getTypeOptions
